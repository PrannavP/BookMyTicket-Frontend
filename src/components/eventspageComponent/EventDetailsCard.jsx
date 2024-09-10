import { useEffect, useContext } from "react";
import { EventContext } from "../../context/EventContext";
import '../../styles/eventspage_styles/event_card.css';
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const EventDetailsCard = () => {
    const { events, loadDefaultEvents, loading, error } = useContext(EventContext);

    useEffect(() => {
        loadDefaultEvents();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="events-details-section">
            {loading &&  <Loader />}
            {error && <p>Error fetching data: {error.message}</p>}
            <ul className="events-details-cards">
                {events.map(event => (
                    <li key={event.id} className="event-detail-card">
                        <div className="event-image-holder">
                            <img src={`http://localhost:3000/uploads/event_image/${event.event_image}`} alt={event.event_name} width="300" />
                        </div>
                        <div className="event-title-holder">
                            <h3>{event.event_name}</h3>
                        </div>
                        <div className="event-performer-holder event-card-info-div">
                            <p>Performer: {event.event_performer}</p>
                        </div>
                        <div className="event-date-holder event-card-info-div">
                            <p>Date: {formatDate(event.event_date)}</p>
                        </div>
                        <div className="event-time-holder event-card-info-div">
                            <p>Time: {event.event_time}</p>
                        </div>
                        <div className="event-genre-holder event-card-info-div">
                            <p>Genre: {event.event_category}</p>
                        </div>
                        <div className="event-location-holder event-card-info-div">
                            <p>Location: {event.event_location}</p>
                        </div>
                        <div className="event-bookbtn-holder">
                            <button><Link to={`/events/${event.id}`}>Book Now</Link></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventDetailsCard;
