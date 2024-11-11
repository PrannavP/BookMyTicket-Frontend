import { useEffect, useState } from "react";

import '../../../styles/attendee_styles/attendee_update_info.css';
import axios from "axios";

const UpdateDetailsFormComponent = ({ userInfo }) => {
    // console.log(userInfo);

    const [message, setMessage] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(`full name = ${fullName}`);
        console.log(`email = ${email}`);
        console.log(`contact = ${contactNumber}`);

        // clear the input fields
        setTimeout(() => {
            setFullName("");
            setEmail("");
            setContactNumber("");
        }, 500);

        // api call according to form fill
        if(fullName.length > 0){
            const response = await axios.patch("http://localhost:3000/attendee/update/name", {
                newFullName: fullName,
                userId: userInfo.id
            });

            // set the message
            setMessage(response.data.message);
        }else if(email.length > 0){
            const response = await axios.patch("http://localhost:3000/attendee/update/email", {
                newEmail: email,
                userId: userInfo.id
            });

            // set the message
            setMessage(response.data.message);
        }else if(contactNumber.length > 0){
            const response = await axios.patch("http://localhost:3000/attendee/update/contactnumber", {
                newContactNumber: contactNumber,
                userId: userInfo.id
            });

            // set the message
            setMessage(response.data.message);
        }
    };

    useEffect(() => {
        if(message){
            const timer = setTimeout(() => {
                setMessage("");
            }, 2300);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="update-details-form-container">
            {
                message && <div className="update-details-form-message-container">
                    <p className="update-details-form-message">{message}</p>
                </div>
            }
            
            <h3>Update Your Details</h3>

            <div className="input-fields-container">
                <div className="name-field-container">
                    <input className="update-details-input" type="text" placeholder={userInfo.full_name} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                
                <div className="email-field-container">
                    <input className="update-details-input" type="text" placeholder={userInfo.email} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="contactnumber-field-container">
                    <input className="update-details-input" type="number" placeholder={userInfo.contact_number} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </div>
            </div>

            <div className="submit-button-container">
                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );
};

export default UpdateDetailsFormComponent;