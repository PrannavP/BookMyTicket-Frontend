import '../../../styles/attendee_styles/attendee_past_tickets_component.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

const AttendeePastTicketsListComponent = ({ id }) => {
    const [attendeePastTickets, setAttendeePastTickets] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAttendeePastTicketDetails = async () => {
            try{
                const response = await axios.post("http://localhost:3000/attendee/attendee-past-ticket-details", {
                    user_id: id,
                });

                setAttendeePastTickets(response.data);
                setLoading(false);
            }catch(err){
                setError("Error fetching past ticket details.");
            }
        };

        fetchAttendeePastTicketDetails();
    }, [id]);

    if(loading){
        return <div>Loading past ticket details...</div>;
    }

    if(error){
        return <div>Error while fetching past ticket details.</div>
    }

    console.log(attendeePastTickets);

    return (
        <div className="attendee-past-ticket-lists-container">
            <h3 className="attendee-past-ticket-lists-container-header">Past Tickets</h3>

            <div className="attendee-past-ticket-details-container">
                {attendeePastTickets.map(ticket => (
                    <div key={ticket.id} className="ticket-card">
                        <h2>{ticket.event_name}</h2>
                        <p><strong>Date:</strong> {new Date(ticket.event_date).toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {ticket.event_time}</p>
                        <p><strong>Location:</strong> {ticket.event_location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttendeePastTicketsListComponent;