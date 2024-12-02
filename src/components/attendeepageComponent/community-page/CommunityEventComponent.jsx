// community event/:id page event details component

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// importing css
import '../../../styles/eventdetail_styles/eventdetail.css';

// icons
import { IconContext } from "react-icons";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const CommunityEventComponent = () => {
    const { id } = useParams();

    const [event, setEvent] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/events/eventdetails/${id}`);
                setEvent(response.data);
                // console.log(`this is doing..... ${response.data}`);
            } catch (err) {
                setError(err);
                console.log(err);
            }
        };
        getEventDetails();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // console.log(userInfo);

    return (
        <div className="event-details-section" style={{ height: "52vh" }}>
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

                        {/* <div id="divider"></div> */}
                </div>
                </>
            )}
        </div>
    );
};

export default CommunityEventComponent;