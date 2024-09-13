import NavBar from "../components/homepageComponent/NavBar";
import EventDetailsCard from "../components/eventspageComponent/EventDetailsCard";
import FilterBar from "../components/eventspageComponent/FilterBar";
import LoggedInNavBar from "../components/dashboardpageComponent/LoggedInNavBar";

import { useUser } from "../hooks/useUser";

import '../styles/eventspage_styles/filter_bar.css';

const EventsPage = () => {

    const { userInfo } = useUser();

    console.log(userInfo);

    return (
        <>
            {userInfo ? <LoggedInNavBar fullname={userInfo.full_name} /> : <NavBar />}
            <FilterBar />
            <EventDetailsCard />
        </>
    );
};

export default EventsPage;