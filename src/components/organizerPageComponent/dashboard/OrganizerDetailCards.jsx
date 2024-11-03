import axios from 'axios';

import { useEffect, useState } from 'react';

const OrganizerDetailCards = ({oName}) => {
    const [ticketsSalesEarning, setTicketsSalesEarning] = useState(null);
    const [ticketsSales, setTicketsSales] = useState(null);
    const [activeEvents, setActiveEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrganizerEarning = async () => {
            try{
                const response = await axios.post('http://localhost:3000/organizer/ticket-earning', {
                    organized_by: oName,
                });

                setTicketsSalesEarning(response.data.total_sum);
                setLoading(false);
            }catch(err){
                setError("Error fetching details");
            }
        };

        fetchOrganizerEarning();
    }, [oName]);

    useEffect(() => {
        const fetchOrganizerTicketsSales = async () => {
            try{
                const response = await axios.post("http://localhost:3000/organizer/ticket-sales", {
                    organized_by: oName,
                });

                setTicketsSales(response.data.total_tickets);
                setLoading(false);
            }catch(err){
                setError("Error fetching details");
            }
        };

        fetchOrganizerTicketsSales();
    }, [oName]);

    useEffect(() => {
        const fetchOrganizerActiveEvents = async () => {
            try{
                const response = await axios.post('http://localhost:3000/organizer/active-events', {
                    organized_by: oName,
                });

                setActiveEvents(response.data.events_count);
                setLoading(false);
            }catch(err){
                setError("Error fetching details");
            }
        }

        fetchOrganizerActiveEvents();
    }, [oName]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return(
        <div className="dashboard-cards-container">
            <div className="total-revenue-card-container dashboard-cards">
                <h5>Total Revenue</h5><br />
                <p className='card-value'>{ticketsSalesEarning}</p>
                <p className='card-text'>You have earned {ticketsSalesEarning} revenue until now.</p>
            </div>
            <div className="tickets-sold-card-container dashboard-cards">
                <h5>Tickets Sold</h5><br />
                <p className='card-value'>{ticketsSales}</p>
                <p className='card-text'>You have sold {ticketsSales} tickets until now.</p>
            </div>
            <div className="active-events-card-container dashboard-cards">
                <h5>Active Events</h5><br />
                <p className='card-value'>{activeEvents}</p>
                <p className='card-text'>You have {activeEvents} upcoming events.</p>
            </div>
        </div>
    )
};

export default OrganizerDetailCards;