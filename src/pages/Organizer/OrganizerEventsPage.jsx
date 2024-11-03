import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";

import '../../styles/organizer_styles/OrganizerEventsPage.css';

import OrganizerSideNavBar from "../../components/organizerPageComponent/dashboard/OrganizerSideNavBar";
import axios from "axios";

const OrganizerEventsPage = () => {
    const { userInfo, error } = useUser();
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    let [eventTime, setEventTime] = useState("");
    
    eventTime = `${eventTime}:00`;

    const [eventCategory, setEventCategory] = useState(''); // State to track selected option

    const [eventLocation, setEventLocation] = useState("");
    const [eventPerformer, setEventPerformer] = useState("");
    const [generalTicketPrice, setGeneralTicketPrice] = useState(0);
    const [vipTicketPrice, setVipTicketPrice] = useState(0);
    const [totalTickets, setTotalTickets] = useState(0);
    
    // const [eventImage, setEventImage] = useState(null);
    const [eventImageFile, setEventImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    const handleCategoryChange = (e) => {
        setEventCategory(e.target.value); // Update state with selected value
    };

    useEffect(() => {
        // If userInfo is null and there is no token, redirect to login
        if (!userInfo && !localStorage.getItem('token')) {
            window.location.href = '/login';
        }
    }, [userInfo]);

    // redirect to attendee page if not organizer
    useEffect(() => {
        if(userInfo && userInfo.role === "attendee"){
            window.location.href = "/attendeedashboard";
        }
    }, [userInfo]);

    // Handle loading state
    if (!userInfo) return <p>Loading...</p>;

    // Handle error state
    if (error) return <p>{error}</p>;    

    // console.log(userInfo.full_name);

    // Image change handler to display preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // setEventImage(URL.createObjectURL(file));

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set preview URL to state
            };
            reader.readAsDataURL(file);

            setEventImageFile(file);
        }
    };

    const handleCreateNewEventButtonClick = () => {
        setIsCreateEventModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCreateEventModalOpen(false);
    };

    const handleCreateNewEvent = async (e) => {
        e.preventDefault();

        // validate fields
        // if(!eventName || !eventDate || !eventTime || !eventCategory
        //     || !eventLocation || !eventPerformer || !generalTicketPrice || !vipTicketPrice
        //     || !totalTickets
        // ){
        //     alert('Please fill in all fields.');
        //     return;
        // }

        const formData = new FormData();
        formData.append('event_name', eventName);
        formData.append('event_date', eventDate);
        formData.append('event_time', eventTime);
        formData.append('event_location', eventLocation);
        formData.append('event_performer', eventPerformer);
        formData.append('event_category', eventCategory);
        formData.append('event_ticket_general_price', generalTicketPrice);
        formData.append('event_ticket_vip_price', vipTicketPrice);
        formData.append('event_total_tickets', totalTickets);
        formData.append('event_remaining_tickets', totalTickets);
        formData.append('event_organizer', userInfo.full_name);
        formData.append('event_image', eventImageFile); // Add the file itself to the form data

        try {
            const response = await axios.post('http://localhost:3000/createNewEvent', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Event created successfully:', response.data);
            handleCloseModal();
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return(
        <>
            <OrganizerSideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <header className="organizer-events-page-header">
                <h1 className="organizer-events-page-title">Organizer Events Page</h1>

                <button onClick={handleCreateNewEventButtonClick}>Create New Event</button>
            </header>


            {isCreateEventModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <h2>Create New Event</h2>
                        <div className="form">
                            <fieldset>
                                <legend>Event Details</legend>
                                <div className="form-group">
                                    <label>Event Name:</label>
                                    <input type="text" name="eventName" required placeholder="Enter event name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Event Date:</label>
                                    <input type="date" name="eventDate" required value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Event Time:</label>
                                    <input type="time" name="eventTime" required value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Event Location:</label>
                                    <input type="text" name="eventLocation" required placeholder="Enter location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Event Performer:</label>
                                    <input type="text" name="eventPerformer" placeholder="Enter performer name" value={eventPerformer} onChange={(e) => setEventPerformer(e.target.value)} />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Event Category & Pricing</legend>
                                <div className="form-group">
                                    <label>Event Category:</label>
                                    <select name="eventCategory" value={eventCategory} onChange={handleCategoryChange} required>
                                        <option value="" disabled>Select category</option>
                                        <option value="music">Music</option>
                                        <option value="sports">Sports</option>
                                        <option value="theater">Theater</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="conference">Conference</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>General Ticket Price:</label>
                                    <input type="number" name="generalTicketPrice" min="0" placeholder="Price in NRS" value={generalTicketPrice} onChange={(e) => setGeneralTicketPrice(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>VIP Ticket Price:</label>
                                    <input type="number" name="vipTicketPrice" min="0" placeholder="Price in NRS" value={vipTicketPrice} onChange={(e) => setVipTicketPrice(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Total Tickets:</label>
                                    <input type="number" name="totalTickets" min="1" required placeholder="Total tickets available" value={totalTickets} onChange={(e) => setTotalTickets(e.target.value)} />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Upload Event Image</legend>
                                <div className="form-group">
                                    <label>Event Image:</label>
                                    <input
                                        type="file"
                                        name="eventImage"
                                        id="eventImage"
                                        className="file-input"
                                        onChange={handleImageChange}
                                        accept="image/*"
                                    />
                                    <label htmlFor="eventImage" className="file-input-label">Upload Event Image</label>
                                </div>
                                {imagePreview && (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                    </div>
                                )}
                            </fieldset>

                            <div className="create-event-form-buttons">
                                <button type="submit" className="submit-button" onClick={handleCreateNewEvent}>Submit</button>
                                <button type="button" onClick={handleCloseModal} className="close-button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default OrganizerEventsPage;