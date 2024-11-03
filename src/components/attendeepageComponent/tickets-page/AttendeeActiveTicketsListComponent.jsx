import '../../../styles/attendee_styles/attendee_active_tickets_component.css';

import axios from "axios";
import { useState, useEffect } from "react";

const AttendeeActiveTicketsListComponent = ({ id }) => {
    const [attendeeActiveTickets, setAttendeeActiveTickets] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAttendeeActiveTicketDetails = async () => {
            try{
                const response = await axios.post("http://localhost:3000/attendee/attendee-active-ticket-details", {
                    user_id: id,
                });
                
                setAttendeeActiveTickets(response.data);
                setLoading(false);
            }catch(err){
                setError("Error fetching active tickets details");
            }
        };

        fetchAttendeeActiveTicketDetails();
    }, [id]);

    if(loading){
        return <div>Loading active ticket details...</div>
    }

    if(error){
        return <div>Error while fetching active ticket details.</div>
    }

    // console.log(attendeeActiveTickets);
    
    return (
        <div className="attendee-active-ticket-lists-container">
            <h3 className="attendee-active-ticket-lists-container-header">Active Tickets</h3>

            <div className="attendee-active-ticket-details-container">
                {attendeeActiveTickets.map(ticket => (
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

export default AttendeeActiveTicketsListComponent;