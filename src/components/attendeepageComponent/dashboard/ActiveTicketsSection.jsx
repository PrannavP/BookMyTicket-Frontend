import axios from "axios";
import { useEffect, useState } from "react";

import { IconContext } from 'react-icons';
import { TbCalendarEvent } from "react-icons/tb"

import '../../../styles/attendee_styles/attendee_active_tickets_count.css';

const ActiveTicketsSection = ({ userID }) => {
    const [eventsCount, setEventsCount] = useState(null);
    const [loading, setLoading]  = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventCount = async () => {
            try{
                const response = await axios.post("http://localhost:3000/details/activetickets/", {
                    userId: userID,
                });
                setEventsCount(response.data);
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
        <div className="upcoming-events-count-container">
            <div className="upcoming-events-count-heading-container">
                <h4>Upcoming Events</h4>
            </div>
            <div className="upcoming-events-count-icon-container">
            <IconContext.Provider value={{ size: "2.2em" }}>
                <TbCalendarEvent />
            </IconContext.Provider>
            </div>
            <div className="upcoming-events-count-value-container">
                {eventsCount}
            </div>
            <div className="upcoming-events-count-message-container">
                <p>You have {eventsCount} events coming soon</p>
            </div>
        </div>
    );
};

export default ActiveTicketsSection;