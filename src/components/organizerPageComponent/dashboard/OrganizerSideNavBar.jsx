import { Link, useLocation } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { IoTicketOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaTicketSimple } from "react-icons/fa6";
import { TbCalendarEvent } from "react-icons/tb"
import { TfiAnnouncement } from "react-icons/tfi";

import LogoutButton from './LogoutButtonComponent';

import '../../../styles/organizer_styles/OrganizerSideNavBar.css';

const OrganizerSideNavBar = ({ profileImageUrl, profileName }) => {
    const location = useLocation();
    
    // Funtion to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return(
        <div className="organizer-side-navbar-container">
            <div className="organizer-side-navbar-firstrow">
                <div className="side-nav-bar-brand-icon-container">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <IoTicketOutline />
                    </IconContext.Provider>
                </div>
                <div className="side-nav-bar-brand-name-container">
                    <h2>BookMyEvent</h2>
                </div>
            </div>

            <div className="organizer-side-navbar-second-row">
                <div className="organizer-side-navbar-links-container">
                    <ul className="organizer-side-navbar-links">
                        <li className={`organizer-side-navbar-link ${isActive('/organizerdashboard') ? 'active' : ''}`}>
                            <Link to='/organizerdashboard'>
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <MdDashboard />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Dashboard
                                </div>
                            </Link>
                        </li>
                        <li className={`organizer-side-navbar-link ${isActive('/organizertickets') ? 'active' : ''}`}>
                            <Link to='/organizertickets'>
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <FaTicketSimple />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Tickets
                                </div>
                            </Link>
                        </li>
                        <li className={`organizer-side-navbar-link ${isActive('/organizerevents') ? 'active' : ''}`}>
                            <Link to='/organizerevents'>
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <TbCalendarEvent />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Events
                                </div>
                            </Link>
                        </li>
                        <li className={`organizer-side-navbar-link ${isActive('/organizer-send-mail') ? 'active' : ''}`}>
                            <Link to="/organizer-send-mail">
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <TfiAnnouncement />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Announcements
                                </div>    
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="organizer-side-navbar-third-row">
                <div className="organizer-side-navbar-profile-image-container">
                    <img src={`http://localhost:3000/uploads/user_profile_image/${profileImageUrl}`} alt="user_profile_image" />
                </div>
                <div className="organizer-side-navbar-profile-name-container">
                    <p>{profileName}</p>
                </div>
            </div>
            <div className="organizer-side-navbar-last-row">
                <div className="organizer-side-navbar-logout-container">
                    <LogoutButton/>
                </div>
            </div>
        </div>
    );
};

export default OrganizerSideNavBar;