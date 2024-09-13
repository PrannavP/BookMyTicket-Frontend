import NavBar from "../components/homepageComponent/NavBar";
import EventDetailComponent from "../components/eventdetailpageComponent/EventDetailComponent";
import LoggedInNavBar from "../components/dashboardpageComponent/LoggedInNavBar";

import { useUser } from "../hooks/useUser";

const EventDetailsPage = () => {
    const TOKEN = localStorage.getItem('token');

    const { userInfo } = useUser();

    if(!userInfo){
        return (
            <>
                <NavBar />
                {/* {TOKEN ? <LoggedInNavBar fullname={userInfo.full_name} /> : <NavBar />} */}
                <EventDetailComponent />
            </>
        );
    }else{
        return (
            <>
                {TOKEN ? <LoggedInNavBar fullname={userInfo.full_name} /> : <NavBar />}
                <EventDetailComponent />
            </>
        );
    }
};

export default EventDetailsPage;