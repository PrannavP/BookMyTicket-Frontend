import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

import AnnouncementPageComponent from "../../components/organizerPageComponent/announcements/AnnouncementPageComponent";
import OrganizerSideNavBar from "../../components/organizerPageComponent/dashboard/OrganizerSideNavBar";

import '../../styles/organizer_styles/OrganizerAnnouncementPage.css';

const OrganizerSendEmailPage = () => {
    const { userInfo, error } = useUser();

    useEffect(() => {
        // If userInfo is null and there is no token, redirect to login
        if (!userInfo && !localStorage.getItem('token')) {
            window.location.href = '/login';
        }
    }, [userInfo]);

    // redirect to organizer page if not organizer
    useEffect(() => {
        if(userInfo && userInfo.role === "attendee"){
            window.location.href = "/attendeedashboard";
        }
    }, [userInfo]);

    // Handle loading state
    if (!userInfo) return <p>Loading...</p>;

    // Handle error state
    if (error) return <p>{error}</p>;

    return(
        <>
            <OrganizerSideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <AnnouncementPageComponent />
        </>
    )
};

export default OrganizerSendEmailPage;