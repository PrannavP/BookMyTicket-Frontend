import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

const NavBar = () => {
    return(
        <div className="navbar-container">
            <div className="brand-logo-container">
                <h3 className="brandname">BookMyEvent</h3>
            </div>
            <div className="navbar-links">
                <ul className="links">
                    <li className="link"><Link to="/">Home</Link></li>
                    <li className="link"><Link to="/events">Events</Link></li>
                    <li className="link"><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
            <div className="login-container">
                <button className='loginbtn' ><Link to="/login">Login</Link></button>
            </div>
        </div>
    )
};

export default NavBar;