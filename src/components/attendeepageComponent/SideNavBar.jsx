import { Link, useLocation } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { IoTicketOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaTicketSimple } from "react-icons/fa6";
import { TbCalendarEvent } from "react-icons/tb"
import { IoIosSettings } from "react-icons/io";

import LogoutButton from './LogoutButton';

import '../../styles/attendee_styles/attendee_side_nav.css';

const SideNavBar = ({ profileImageUrl, profileName }) => {
    const location = useLocation();
    
    // Funtion to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return(
        <div className="attendee-side-navbar-container">
            <div className="attendee-side-navbar-firstrow">
                <div className="side-nav-bar-brand-icon-container">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <IoTicketOutline />
                    </IconContext.Provider>
                </div>
                <div className="side-nav-bar-brand-name-container">
                    <h2>BookMyEvent</h2>
                </div>
            </div>

            <div className="attendee-side-navbar-second-row">
                <div className="attendee-side-navbar-links-container">
                    <ul className="attendee-side-navbar-links">
                        <li className={`attendee-side-navbar-link ${isActive('/attendeedashboard') ? 'active' : ''}`}>
                            <Link to='/attendeedashboard'>
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
                        <li className={`attendee-side-navbar-link ${isActive('/yourtickets') ? 'active' : ''}`}>
                            <Link to='/yourtickets'>
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <FaTicketSimple />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    My Tickets
                                </div>
                            </Link>
                        </li>
                        <li className={`attendee-side-navbar-link ${isActive('/upcomingevents') ? 'active' : ''}`}>
                            <Link to='/upcomingevents'>
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <TbCalendarEvent />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Upcoming Events
                                </div>
                            </Link>
                        </li>
                        <li className={`attendee-side-navbar-link ${isActive('/attendeesettings') ? 'active' : ''}`}>
                            <Link to="/attendeesettings">
                                <div className="side-nav-bar-icon-container">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <IoIosSettings />
                                    </IconContext.Provider>
                                </div>
                                <div className="side-nav-bar-text-container">
                                    Settings
                                </div>    
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="attendee-side-navbar-third-row">
                <div className="attendee-side-navbar-profile-image-container">
                    <img src={`http://localhost:3000/uploads/user_profile_image/${profileImageUrl}`} alt="user_profile_image" />
                </div>
                <div className="attendee-side-navbar-profile-name-container">
                    <p>{profileName}</p>
                </div>
            </div>
            <div className="attendee-side-navbar-last-row">
                <div className="attendee-side-navbar-logout-container">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};

export default SideNavBar;