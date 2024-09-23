import axios from "axios";
import { useEffect, useState } from "react";

import { IconContext } from 'react-icons';
import { TbCalendarEvent } from "react-icons/tb";

import '../../../styles/attendee_styles/attendee_upcoming_events.css';

const UpcomingEventsSection = ({ userID }) => {
    const [upcomingEvents, setUpcomingEvents] = useState(null);
    const [loading, setLoading]  = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventCount = async () => {
            try{
                const response = await axios.post("http://localhost:3000/details/upcomingevents/", {
                    userId: userID,
                });
                setUpcomingEvents(response.data);
                setLoading(false);
            }catch(err){
                setError("Error fetching event count");
            }
        };

        fetchEventCount();
    }, [userID]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return(
        <div className="active-tickets-count-container">
            <div className="active-tickets-count-heading-container">
                <h4>Upcoming Events</h4>
            </div>
            <div className="active-tickets-count-icon-container">
            <IconContext.Provider value={{ size: "2.2em" }}>
                <TbCalendarEvent />
            </IconContext.Provider>
            </div>
            <div className="active-tickets-count-value-container">
                {upcomingEvents}
            </div>
            <div className="active-tickets-count-message-container">
                <p>You have {upcomingEvents} events coming soon</p>
            </div>
        </div>
    );
};

export default UpcomingEventsSection;