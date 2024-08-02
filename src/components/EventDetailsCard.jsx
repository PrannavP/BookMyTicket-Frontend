import { useEffect, useState } from "react";

import getAllEvents from "../services/eventsDetailsApi";

const EventDetailsCard = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // console.log(typeof(events));

    useEffect(() => {
        const fetchEvents = async () => {
            try{
                const data = await getAllEvents();
                setEvents(data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            };
        };
        fetchEvents();
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Event Details</h1>
            {events.length > 0 ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <h2>{event.event_name}</h2>
                            <p>{event.event_date}</p>
                            <p>{event.event_time}</p>
                            <p>{event.event_location}</p>
                            <p>{event.event_performer}</p>
                            <p>{event.event_category}</p>
                            <p>{event.event_ticket_price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events available</p>
            )}
        </div>
    );
};

export default EventDetailsCard;