import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

// importing css
import '../../styles/eventdetail_styles/eventdetail.css';

// icons
import { IconContext } from "react-icons";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";

const EventDetailComponent = () => {
    const { id } = useParams();

    const [event, setEvent] = useState(null);
    const [error, setError] = useState('');

    const getEventDetails = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/events/eventdetails/${id}`);
            setEvent(response.data);
            console.log(response.data);
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }, [id]);

    useEffect(() => {
        getEventDetails();
    }, [getEventDetails]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleBookButtonClick = () => {
        alert("Book Now?");
    };

    const handleSaveButtonClick = () => {
        alert("Save Now?");
    };

    return (
        <div className="event-details-section">
            {error && <p>Error Fetching Data: {error.message}</p>}

            {event && (
                <>
                <div className="eventdetail-image-holder">
                    <img
                        src={`http://localhost:3000/uploads/event_image/${event.event_image}`}
                        alt="Event_Image"
                        width={550} />
                </div>
                <div className="eventdetail-information-section">
                        <div className="eventdetail-information-eventname">
                            <p className="eventname-holder">
                                {event.event_name}
                            </p>
                        </div>
                        <div className="eventdetail-information-row_first-container">
                            <div className="eventdetail-information-eventdate">
                                <IconContext.Provider value={{ size: "1.6em" }}>
                                    <SlCalender />
                                </IconContext.Provider>
                                <p className="eventdate-holder">{formatDate(event.event_date)}</p>
                            </div>
                            <div className="eventdetail-information-eventtime">
                                <IconContext.Provider value={{ size: "1.6em" }}>
                                    <FaRegClock />
                                </IconContext.Provider>
                                <p className="eventtime-holder">{event.event_time}</p>
                            </div>
                        </div>
                        <div className="eventdetail-information-row_second-container">
                            <div className="eventdetail-information-location">
                                <IconContext.Provider value={{ size: "1.6em" }}>
                                    <FaLocationDot />
                                </IconContext.Provider>
                                <p className="eventlocation-holder">{event.event_location}</p>
                            </div>
                        </div>
                        <div className="eventdetail-information-genre-container">
                            {event.event_category.split(',').map((genre, index) => (
                                <div key={index} className="eventdetail-information-genre">
                                    <p>{genre.trim()}</p>
                                </div>
                            ))}
                        </div>

                        <div id="divider"></div>

                        <div className="eventdetail-ticketing-section">
                            <div className="ticketing-section-title-holder">
                                <p>Ticketing Options</p>
                            </div>
                            <div className="ticketing-section-price-section">
                                <div className="general-price-section-container">
                                    <p className="general-price-title-holder">General Price:</p>
                                    <p className="general-price-holder">{event.event_ticket_general_price}</p>
                                </div>
                                <div className="vip-price-section-container">
                                    <p className="vip-price-title-holder">VIP Price:</p>
                                    <p className="vip-price-holder">{event.event_ticket_vip_price}</p>
                                </div>
                            </div>
                            <div className="ticketing-section-buttons-section">
                                <div className="button-container booknow-button-container">
                                    <button className="booknow-button" onClick={handleBookButtonClick}>Book Ticket</button>
                                </div>
                                <div className="button-container save-button-container">
                                    <button className="save-button" onClick={handleSaveButtonClick}>Save Event</button>
                                </div>
                            </div>


                            <div className="eventdetail-information-row_first-container">
                                <div className="eventdetail-ticket-sold-section">
                                    <IconContext.Provider value={{ size: "1.6em" }}>
                                        <FaCheck />
                                    </IconContext.Provider>
                                    <p className="tickets-sold-holder">{event.event_total_tickets - event.event_remaining_tickets}Tickets Sold</p>
                                </div>
                                <div className="eventdetail-share-section">
                                    <IconContext.Provider value={{ size: "1.6em" }}>
                                        <CiShare2 />
                                    </IconContext.Provider>
                                    <p className="share-button-holder">Share Event</p>
                                </div>
                            </div>
                        </div>
                </div>
                </>
            )}
        </div>
    );
};

export default EventDetailComponent;