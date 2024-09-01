import NavBar from "../components/homepageComponent/NavBar";
import EventDetailsCard from "../components/eventspageComponent/EventDetailsCard";
import FilterBar from "../components/eventspageComponent/FilterBar";

import '../styles/eventspage_styles/filter_bar.css';

const EventsPage = () => {
    return (
        <>
            <NavBar />
            <FilterBar />
            <EventDetailsCard />
        </>
    );
};

export default EventsPage;