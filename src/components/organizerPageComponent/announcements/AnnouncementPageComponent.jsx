import axios from 'axios';
import '../../../styles/organizer_styles/OrganizerAnnouncementPage.css';
import { useState } from 'react';

const ChangePasswordComponent = () => {
    const [eventName, setEventName] = useState("");
    const [eventCategory, setEventCategory] = useState("");

    const handleCategoryChange = (e) => {
        setEventCategory(e.target.value);
    };

    const handleSendEmailButton = async () => {
        alert(eventCategory);
        try{
            const response = await axios.post("http://localhost:3000/suggestions/getusergenres", {
                name: eventName,
                category: eventCategory
            });

            setEventName("");
            setEventCategory("");
            console.log(response.data);
        }catch(err){
            console.error(err);
        }
    };

    return (
        <>
        <div className="announcement-send-email-container">
            <h3>Send Emails to Attendees</h3>

            <div className="announcement-email-subject-container">
                <div className="announcement-email-subject-label-container">
                    <label className="announcement-email-subject-label">Event Name</label>
                </div>
                <div className="announcement-email-suject-field">
                    <input className='email-subject-input' type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                </div>
            </div>

            <div className="announcement-email-body-container">
                <div className="announcement-email-body-label-container">
                    <label className="announcement-email-body-label">Category</label>
                </div>
                <div className="announcement-email-body-field">
                    {/* <input className='email-body-input' value={eventCategory} onChange={(e) => setEventCategory(e.target.value)} /> */}
                    <select className='email-body-input' name="eventCategory" value={eventCategory} onChange={handleCategoryChange} required>
                        <option value="" disabled>Select category</option>
                        <option value="music">Music</option>
                        <option value="sports">Sports</option>
                        <option value="theater">Theater</option>
                        <option value="comedy">Comedy</option>
                        <option value="conference">Conference</option>
                    </select>
                </div>
            </div>

            <div className="announcement-send-email-button-container">
                <button onClick={handleSendEmailButton}>Send</button>
            </div>
        </div>
        <div className="mass-email-send-container">
            
        </div>
        </>
    );
};

export default ChangePasswordComponent;