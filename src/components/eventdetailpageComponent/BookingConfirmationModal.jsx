import { useEffect } from "react";
import axios from "axios";

const BookingConfirmationModal = ({ isOpen, onClose, generalCategoryTicketQuantity, vipCategoryTicketQuantity, event, user }) => {
    const generalTotalPrice = generalCategoryTicketQuantity * (event?.event_ticket_general_price || 0);
    const vipTotalPrice = vipCategoryTicketQuantity * (event?.event_ticket_vip_price || 0);
    const totalPrice = generalTotalPrice + vipTotalPrice;

    // useEffect(() => {
    //     if (user) {
    //         console.log(user.id);
    //     } else {
    //         console.log("User object is null or undefined");
    //     }
    // }, [user]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handlePayment = (e) => {
        e.preventDefault();

        console.log(user.email);
        console.log(user.full_name);

        // store some details in tickets table
        try{
            axios.post("http://localhost:3000/details/booking", {
                event_id: event.id,
                general_cat_ticket: generalCategoryTicketQuantity,
                vip_cat_ticket: vipCategoryTicketQuantity,
                total_price: totalPrice,
                payment_status: "INITIATED",
                booked_by: user.id,
                organized_by: event.event_organizer
            });
        }catch(err){
            console.log("Error while booking tickets.", err);
        }

        // esewa payment integration
        try{
            axios.post('http://localhost:3000/payment', {
                amount: totalPrice,
                event_name: event.event_name,
                event_performer: event.event_performer,
                eventId: event.id
            }).then(response => {
                document.write(response.data);
            }).catch(error => {
                console.error(error);
            });
        }catch(err){
            console.log("Error while processing payment.", err);
        }
    };

    return (
        <div className="booking-confirmation-modal">
            <div className="booking-confirmation-modal-content">
                <h2>Confirm Your Booking</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>General Tickets ({generalCategoryTicketQuantity} x {event?.event_ticket_general_price || 0}):</td>
                            <td>{generalTotalPrice}</td>
                        </tr>
                        <tr>
                            <td>VIP Tickets ({vipCategoryTicketQuantity} x {event?.event_ticket_vip_price || 0}):</td>
                            <td>{vipTotalPrice}</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Total Price</h3>
                <h4>{totalPrice}</h4>

                <button onClick={handlePayment}>Pay</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default BookingConfirmationModal;