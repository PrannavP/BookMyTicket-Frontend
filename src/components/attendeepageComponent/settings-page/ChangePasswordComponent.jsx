import axios from 'axios';

import '../../../styles/attendee_styles/attendee_change_password_component.css';
import { useState, useEffect } from 'react';

const ChangePasswordComponent = ({ uid }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setconfirmNewPassword] = useState("");
    const [message, setMessage] = useState("");

    // Function to change password by calling api
    const handlePasswordReset = async (e) => {
        e.preventDefault();

        // first check if all the fields are filled
        if(!currentPassword || !newPassword || confirmNewPassword){
            setMessage("Please fill all the fields");
            return;
        }

        // then check if newPassword and confirmPassword fields both match
        if(newPassword !== confirmNewPassword){
            setMessage("New passwords do not match");
            return;
        }

        // make api call
        try{
            const response = await axios.put("http://localhost:3000/user/update-password", {
                userId: uid,
                currentPassword: currentPassword,
                newPassword: newPassword
            });
            
            console.log(response.data.message);
            setMessage(response.data.message);
        }catch(err){
            setMessage(err.response?.data || 'An error occurred');
        }
    };

    useEffect(() => {
        if(message){
            const timer = setTimeout(() => {
                setMessage("");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="change-password-container">
            <h3>Change Password</h3>

            <div className="previous-password-field-container">
                <div className="previous-password-label-container">
                    <label className="reset-password-label">Current Password</label>
                </div>
                <div className="previous-password-field">
                    <input className='change-password-input' type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </div>
            </div>

            <div className="new-password-field-container">
                <div className="new-password-label-container">
                    <label className="reset-password-label">New Password</label>
                </div>
                <div className="new-password-field">
                    <input className='change-password-input' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
            </div>

            <div className="confirm-new-password-field-container">
                <div className="confirm-new-password-label-container">
                    <label className="reset-password-label">Confirm New Password</label>
                </div>
                <div className="confirm-new-password-field">
                    <input className='change-password-input' type="password" value={confirmNewPassword} onChange={(e) => setconfirmNewPassword(e.target.value)} />
                </div>
            </div>

            <div className="reset-password-button-container">
                <button onClick={handlePasswordReset}>Change Password</button>
            </div>

            {message && <p className='password-component-message'>{message}</p>}
        </div>
    );
};

export default ChangePasswordComponent;