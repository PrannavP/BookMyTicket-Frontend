import '../styles/herosection.css';

import { Link } from 'react-router-dom';

import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
    return(
        <div className="main-hero-section">
            <div className="text-container">
                <h3>Discover and Book Your Next Event</h3>
                <p>Explore events tailored just for you.</p>
            </div>
            <div className="buttons-container">
                <button className="get-started-button">Get Started</button>
                <button className="view-events-button"><Link to="/events">View Events</Link></button>
            </div>
            <ImageCarousel />
        </div>
    )
};

export default HeroSection;