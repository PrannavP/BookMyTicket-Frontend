import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

import OrganizerSideNavBar from "../../components/organizerPageComponent/dashboard/OrganizerSideNavBar";

const OrganizerTicketsPage = () => {
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

    console.log(userInfo);

    return(
        <>
            <OrganizerSideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <h1>Organizer Tickets Page</h1>
        </>
    )
};

export default OrganizerTicketsPage;