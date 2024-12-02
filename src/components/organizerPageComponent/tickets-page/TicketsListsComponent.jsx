import { useEffect, useState } from "react";
import axios from "axios";
import '../../../styles/organizer_styles/OrganizerTicketsPage.css';

const TicketsListsComponent = ({ organizer }) => {
    const [ticketsList, setTicketsList] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="table-container">
            <table className="tickets-table">
                <thead className="table-header">
                    <tr>
                        <th className="table-heading">Full Name</th>
                        <th className="table-heading">Event Name</th>
                        <th className="table-heading">Payment Status</th>
                        <th className="table-heading">Contact Number</th>
                        <th className="table-heading">Total Price</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {ticketsList.map((ticket) => (
                        <tr key={ticket.id} className="table-row">
                            <td className="table-cell">{ticket.full_name}</td>
                            <td className="table-cell">{ticket.event_name}</td>
                            <td className="table-cell">
                                <span className={`status-badge ${
                                    ticket.payment_status.toLowerCase() === 'paid' 
                                        ? 'status-paid' 
                                        : 'status-pending'
                                }`}>
                                    {ticket.payment_status}
                                </span>
                            </td>
                            <td className="table-cell">{ticket.contact_number}</td>
                            <td className="table-cell price-column">
                                Rs. {Number(ticket.total_price).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketsListsComponent;