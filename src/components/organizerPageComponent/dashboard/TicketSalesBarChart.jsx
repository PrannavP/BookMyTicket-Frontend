import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import axios from 'axios';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TicketSalesBarChart = ({ oEmail }) => {
    const [eventTicketsSoldData, setEventTicketsSoldData] = useState(null);

    useEffect(() => {
        const fetchTicketsSoldData = async () => {
            try{
                const response = await axios.post('http://localhost:3000/organizer/tickets-sold/', {
                    organizerEmail: oEmail,
                });
                setEventTicketsSoldData(response.data);
            }catch(err){
                console.log("Error fetching tickets sold data.", err);
            }
        };
        fetchTicketsSoldData();
    }, [oEmail]);

    const data = eventTicketsSoldData ? {
        labels: eventTicketsSoldData.map(event => event.event_name),
        datasets: [
            {
                label: 'Tickets Sold',
                data: eventTicketsSoldData.map(event => event.event_total_tickets - event.event_remaining_tickets),
                backgroundColor: 'white',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    } : null;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',  // Set legend text color to white
                },
            },
            title: {
                display: true,
                text: 'Tickets Sales Data',
                color: 'white',  // Set chart title color to white
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',  // Set x-axis labels to white
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',  // Set x-axis grid lines to a light color
                },
            },
            y: {
                ticks: {
                    color: 'white',  // Set y-axis labels to white
                    callback: function(value) {
                        return Number.isInteger(value) ? value : null;
                    },
                    stepSize: 1, // Force integer steps
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',  // Set y-axis grid lines to a light color
                },
            },
        },
    };    

    const chartStyles = {
        float: 'left',
        width: '45%',
        height: '10%',
        margin: '0',
        marginLeft: '10%',
    };

    return (
        <div style={chartStyles}>
            {eventTicketsSoldData ? (
                <>
                    <Bar data={data} options={options} />
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TicketSalesBarChart;