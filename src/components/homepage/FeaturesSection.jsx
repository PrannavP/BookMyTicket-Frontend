import '../../styles/featuressection.css'

import { IconContext } from 'react-icons';

// icons imports
import { SlCalender } from "react-icons/sl";
import { TbTargetArrow } from "react-icons/tb";
import { MdPayment, MdOutlineDiscount } from "react-icons/md";
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoMdStarHalf, IoIosNotifications } from "react-icons/io";
import { FaMobile } from "react-icons/fa";


const FeaturesSection = () => {
    return(
        <div className="features-container">
            <div className="features-container-header">
                <h3>What Features Do We Provide?</h3>
            </div>

            <div className="left-column organizers-features-column">
                <div className="left-col-header">
                    <h3>For Organizers</h3>
                </div>
                <div className="features-list-organizers">
                    <ul className='features-organizers'>
                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <SlCalender />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Event Creation: Easily create and manage events.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <TbTargetArrow />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Audience Target: Send personalized events to attendees.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <MdPayment />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Secure Payment Processing: Handle transactions securely.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <IoPeopleOutline />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Attendee Management: Manage attendee informations.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <MdOutlineDiscount />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Promotion Management: Manage special offers to boost ticket sales.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="fs-get-started-button-container">
                    <button className='get-started-button'>Get Started</button>
                </div>
            </div>

            <div className="right-column attendees-features-column">
                <div className="right-col-header">
                    <h3>For Attendees</h3>
                </div>
                <div className="features-list-organizers">
                    <ul className='features-organizers'>
                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <FaStar />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Personalized Recommendations: Get event suggestions based on your interests.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <IoSearch />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Easy Search and Booking: Find and book events effortlessly.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <IoMdStarHalf />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>User Reviews and Ratings: Read reviews of past events.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <IoIosNotifications />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Event Notifications: Receive alerts for upcoming events.</p>
                            </div>
                        </li>

                        <li className="feature-organizers">
                            <IconContext.Provider value={{ size: "2.5em" }}>
                                <FaMobile />
                            </IconContext.Provider>
                            <div className="text-container">
                                <p>Mobile Friendly Interface: Book and manage tickets on the go.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="fs-get-started-button-container">
                    <button className='get-started-button'>Get Started</button>
                </div>
            </div>
        </div>
    )
};

export default FeaturesSection;