import axios from "axios";
import { useEffect, useState } from "react";

const TicketsListsComponent = ({ organizer }) => {
    const [ticketsList, setTicketsList] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    useEffect(() => {
        const fetchTicketDetails = async () => {
            const response = await axios.post("http://localhost:3000/organizer/booked-ticket-details", {
                organized_by: organizer,
            });
            
            setTicketsList(response.data);
            setLoading(false);
        };

        fetchTicketDetails();
    }, [organizer]);

    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div className="tickets-details-list-container">
            {ticketsList.map(ticket => (
                <div className="ticket-detail-container" key={ticket.id}>
                    <p className="ticket-detail-container-data-holder">{ticket.full_name}</p>
                    <p className="ticket-detail-container-data-holder">{ticket.payment_status}</p>
                    <p className="ticket-detail-container-data-holder">{ticket.contact_number}</p>
                    <p className="ticket-detail-container-data-holder">{ticket.total_price}</p>
                </div>
            ))}
        </div>
    );
};

export default TicketsListsComponent;