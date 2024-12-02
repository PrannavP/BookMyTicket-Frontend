import { useEffect } from "react";

import { useUser } from "../../hooks/useUser";

import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";
import CommunityEventsComponent from "../../components/attendeepageComponent/community-page/CommunityEventsComponent";

const AttendeeCommunityPage = () => {
    const { userInfo, error } = useUser();

    useEffect(() => {
        // If userInfo is null and there is no token, redirect to login
        if (!userInfo && !localStorage.getItem('token')) {
            window.location.href = '/login';
        }
    }, [userInfo]);

    // Handle loading state
    if (!userInfo) return <p>Loading...</p>;

    // Handle error state
    if (error) return <p>{error}</p>;

    return(
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="Community" />
            <CommunityEventsComponent />
        </>
    );
};

export default AttendeeCommunityPage;