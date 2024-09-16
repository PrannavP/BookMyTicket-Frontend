import { useEffect } from "react";

import { useUser } from "../../hooks/useUser";

import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";

const AttendeeUpcomingEventsPage = () => {
    const TOKEN = localStorage.getItem('token');
    
    useEffect(() => {
        if(!TOKEN){
            window.location.href = '/login';
        }
    }, [TOKEN]);

    const { userInfo, error } = useUser();

    if(!userInfo) return <p>Loading...</p>;

    if(error) return <p>{error}</p>

    return(
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="Upcoming Events" />
        </>
    );
};

export default AttendeeUpcomingEventsPage;