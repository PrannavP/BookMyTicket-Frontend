import '../../styles/attendee_styles/attendee_top_bar.css';

const TopBar = ({ title }) => {
    return(
        <div className="attendee-dashboard-top-bar">
            <div className="attendee-dashboard-top-bar-title-container">
                <h3 className="top-bar-title">{title}</h3>
            </div>
        </div>
    )
};

export default TopBar;