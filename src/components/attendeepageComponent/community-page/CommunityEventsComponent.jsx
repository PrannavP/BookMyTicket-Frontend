// community page compoonent


import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { fetchEvents } from "../../../services/eventsDetailsApi";

import '../../../styles/attendee_styles/attendee_community_events_component.css';

const CommunityEventsComponent = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadAllEvents = async() => {
        try{
            setLoading(true);
            const response = await fetchEvents();
            setEvents(response);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAllEvents();
    }, []);
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="community-page-events-details-container">
            {loading && <Loader />}
            {error && <p>Error while getting events</p>}
            <ul className="community-page-events-details-cards">
                {events.map(event => (
                    <li key={event.id} className="community-page-event-detail-card">
                        <div className="community-page-event-image-holder">
                            <img src={`http://localhost:3000/uploads/event_image/${event.event_image}`} alt={event.event_name} width="300" />
                        </div>
                        <div className="community-page-event-info">
                            <div className="community-page-event-title-holder">
                                <h3>{event.event_name}</h3>
                            </div>
                            <div className="community-page-event-performer-location-holder">
                                <p style={{ display: "inline-block" }}>Performer: {event.event_performer}</p>
                                <p style={{ display: "inline-block" }}>Location: {event.event_location}</p>
                            </div>
                            <div className="community-page-event-date-time-genre-holder">
                                <p style={{ display: "inline-block" }}>Date: {formatDate(event.event_date)}</p>
                                <p style={{ display: "inline-block" }}>Time: {event.event_time}</p>
                                <p style={{ display: "inline-block" }}>Genre: {event.event_category}</p>
                            </div>
                            <div className="community-page-event-bookbtn-holder">
                                <button><Link to={`/community/${event.id}`}>Start </Link></button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityEventsComponent;