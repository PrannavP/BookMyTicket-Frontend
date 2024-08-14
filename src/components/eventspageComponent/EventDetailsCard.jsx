import { useState, useEffect } from "react";

import { fetchEvents } from '../../services/eventsDetailsApi';

import '../../styles/eventspage_styles/event_card.css';

// import event_image_1 from '../../assets/images/eventimage2.jpg';

const EventDetailsCard = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetching data using fetchEvents function
        fetchEvents()
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // if(loading) return <p>Loading...</p>
    // if(error) return <p>Error Fetching Data... {error.message}</p>;

    // Helper function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="events-details-section">
            {loading && <p>Loading GIF...</p>}

            {error && <p>Error getting events.. please try again</p>}

            <ul className="events-details-cards">
                {events.map(event => (
                <li key={event.id} className="event-detail-card">
                    <div className="event-image-holder">
                        <img src={`http://localhost:3000/uploads/event_image/${event.event_image}`} alt={event.event_name} width="300" />
                    </div>

                    <div className="event-title-holder">
                        <h3>{event.event_name}</h3>
                    </div>

                    <div className="event-performer-holder">
                        <p>Performer: {event.event_performer}</p>
                    </div>

                    <div className="event-date-holder">
                        <p>Date: {formatDate(event.event_date)}</p>
                    </div>

                    <div className="event-time-holder">
                        <p>Time: {event.event_time}</p>
                    </div>

                    <div className="event-genre-holder" style={{ marginBottom: "2%", marginTop: "2.4%" }}>
                        <p>Genre: {event.event_category}</p>
                    </div>

                    <div className="event-location-holder">
                        <p>Location: {event.event_location}</p>
                    </div>

                    <div className="event-bookbtn-holder">
                        <button>Buy Ticket</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
      );
};

export default EventDetailsCard;