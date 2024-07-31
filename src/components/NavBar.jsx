import '../styles/navbar.css';

const NavBar = () => {
    return(
        <div className="navbar-container">
            <div className="brand-logo-container">
                <h3 className="brandname">BookMyEvent</h3>
            </div>
            <div className="navbar-links">
                <ul className="links">
                    <li className="link">Home</li>
                    <li className="link">Events</li>
                    <li className="link">Contact Us</li>
                </ul>
            </div>
            <div className="login-container">
                <button className='loginbtn' >Get Started</button>
            </div>
        </div>
    )
};

export default NavBar;