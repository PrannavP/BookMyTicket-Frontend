import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { AiOutlineCopyright } from "react-icons/ai";

import '../../styles/footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-brand-container">
                <h3>BookMyEvent</h3>
            </div>

            <div className="footer-links-container">
                <ul className="footer-links">
                    <li className="footer-link"><Link to="/">Home</Link></li>
                    <li className="footer-link"><Link to="/events">Events</Link></li>
                    <li className="footer-link"><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </div>

            <div className="footer-copyright-container">
                <IconContext.Provider value={{ size: "2.2em" }}>
                    <AiOutlineCopyright />
                </IconContext.Provider>
            </div>
        </footer>
    );
};

export default Footer;