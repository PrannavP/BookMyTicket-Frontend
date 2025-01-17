import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../../styles/payment_successful/payment_successful.css';

import { useUser } from '../../hooks/useUser';

const SuccessfulPaymentMessage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [qrCodeImage, setQrCodeImage] = useState('');
    const { userInfo } = useUser();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const dataParam = urlParams.get('data');

        if (dataParam && id) {
            axios.post("http://localhost:3000/payment/confirmationpayment/", {
                data: dataParam,
                id: id
            })
            .then(response => {
                setResponse(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (response && response.paymentDetails && userInfo) {
            // Store transaction details after payment confirmation
            axios.post('http://localhost:3000/transaction/store', {
                product_code: response.paymentDetails.product_code,
                signature: response.paymentDetails.signature,
                status: response.paymentDetails.status,
                total_amount: response.paymentDetails.total_amount,
                transaction_code: response.paymentDetails.transaction_code,
                transaction_uuid: response.paymentDetails.transaction_uuid,
                booked_by: userInfo.id
            })
            .then(() => {
                console.log('Transaction details stored successfully');
            })
            .catch(error => {
                console.error('Error storing transaction details:', error);
            });

            // Generate QR code
            axios.post('http://localhost:3000/generate-qr', {
                user_id: userInfo.id
            })
            .then(response => {
                setQrCodeImage(response.data.qrCodeDataURL);
            })
            .catch(error => {
                console.error("Error while QR code generation:", error);
            });
        }
    }, [response, userInfo]);

    useEffect(() => {
        if (response && response.paymentDetails.status === "COMPLETE" && userInfo) {
            try {
                axios.post(`http://localhost:3000/sendEmail/eventbooking/${id}`, {
                    userEmail: userInfo.email,
                    userFullName: userInfo.full_name,
                    ticketQRCodeImage: qrCodeImage,
                });
            } catch (err) {
                console.log("Error while decreasing tickets and sending email", err);
            }
        }
    }, [id, response, userInfo, qrCodeImage]);

    if (loading) {
        return <div>Payment Processing...</div>;
    }

    return (
        <div className="payment-message-container">
            <div className="payment-message-header-container">
                <h1>Payment Success</h1>
            </div>

            <div className="payment-message-icon-container">
                <IconContext.Provider value={{ size: "4em", color: "green" }}>
                    <FaCheckCircle />
                </IconContext.Provider>
            </div>
            {response && response.paymentDetails ? (
                <div className="payment-message-status-container">
                    <p><strong>Transaction Code:</strong> {response.paymentDetails.transaction_code}</p>
                    <p><strong>Status:</strong> {response.paymentDetails.status}</p>
                    <p><strong>Total Amount:</strong> {response.paymentDetails.total_amount}</p>
                    <p><strong>Transaction UUID:</strong> {response.paymentDetails.transaction_uuid}</p>
                    <Link to={`/events/${id}`}><button>Done!</button></Link>
                </div>
            ) : (
                <p>No data found</p>
            )}
            {qrCodeImage && (
                <div className="payment-message-image-container">
                    <img src={qrCodeImage} alt="Event Booking Ticket QR Code" />
                </div>
            )}
        </div>
    );
};

export default SuccessfulPaymentMessage;