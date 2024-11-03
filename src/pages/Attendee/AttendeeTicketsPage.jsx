import { useEffect } from "react";

import { useUser } from "../../hooks/useUser";

import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";
import AttendeeActiveTicketsListComponent from "../../components/attendeepageComponent/tickets-page/AttendeeActiveTicketsListComponent";
import AttendeePastTicketsListComponent from "../../components/attendeepageComponent/tickets-page/AttendeePastTicketsListComponent";

const AttendeeTicketsPage = () => {
    const TOKEN = localStorage.getItem('token');
    
    useEffect(() => {
        if(!TOKEN){
            window.location.href = '/login';
        }
    }, [TOKEN]);

    const { userInfo, error } = useUser();

    if(!userInfo) return <p>Loading...</p>;

    if(error) return <p>{error}</p>

    // console.log(userInfo);

    return(
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="My Tickets" />
            <AttendeeActiveTicketsListComponent id={userInfo.id} />
            <AttendeePastTicketsListComponent id={userInfo.id} />
        </>
    );
};

export default AttendeeTicketsPage;