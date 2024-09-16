import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/LoggedInNavBar.css';

const LoggedInNavBar = ({ fullname }) => {
    const firstName = fullname.split(' ')[0];

    return(
        <div className="logged-in-navbar-container">
            <div className="logged-in-brand-logo-container">
                <h3 className="logged-in-brandname">BookMyEvent</h3>
            </div>
            <div className="logged-in-navbar-links">
                <ul className="logged-in-links">
                    <li className="logged-in-link"><Link to="/">Home</Link></li>
                    <li className="logged-in-link"><Link to="/events">Events</Link></li>
                    <li className="logged-in-link"><Link to="/contactus">Contact Us</Link></li>
                    <li className='logged-in-link logged-in-profile-name'><Link to="/attendeesettings">{firstName}</Link></li>
                </ul>
            </div>
        </div>
    );
};

LoggedInNavBar.propTypes = {
    fullname: PropTypes.string.isRequired
};

export default LoggedInNavBar;