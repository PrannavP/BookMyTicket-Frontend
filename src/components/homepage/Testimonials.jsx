import '../../styles/testimonial.css';

// importing images
import userImage1 from '../../assets/images/test-1.png';
import userImage2 from '../../assets/images/test-2.png';

const Testimonials = () => {
    return(
        <div className="testimonials-section">
            <div className="testimonials-section-heading-container">
                <h3>What Our Users Say</h3>
            </div>

            <div className="testimonials-container">
                <div className="testimonial">
                    <div className="testimonial-user-image">
                        <img src={userImage1} alt="UserImage" />
                    </div>
                    <div className="testimonial-talks">
                        <p>“The easiest event booking system I’ve ever used! Highly recommended.”</p>
                    </div>
                    <div className="testimonial-name">
                        <p>Sarah J.</p>
                    </div>
                    <div className="testimonial-type">
                        <p>Event Attendee</p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-user-image">
                        <img src={userImage1} alt="UserImage" />
                    </div>
                    <div className="testimonial-talks">
                        <p>“Amazing features for event organizers and seamless experience for attendees.”</p>
                    </div>
                    <div className="testimonial-name">
                        <p>Daniel K.</p>
                    </div>
                    <div className="testimonial-type">
                        <p>Event Organizer</p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial-user-image">
                        <img src={userImage1} alt="UserImage" />
                    </div>
                    <div className="testimonial-talks">
                        <p>“BookMyEvent made managing my event a breeze. Simple and effective.”</p>
                    </div>
                    <div className="testimonial-name">
                        <p>Mikel Jackson</p>
                    </div>
                    <div className="testimonial-type">
                        <p>Concert Event Host</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;