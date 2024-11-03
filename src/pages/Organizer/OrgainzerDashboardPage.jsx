import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

import '../../styles/organizer_styles/OrgainzerDashboardPage.css';

import OrganizerSideNavBar from "../../components/organizerPageComponent/dashboard/OrganizerSideNavBar";
import TicketSalesBarChart from "../../components/organizerPageComponent/dashboard/TicketSalesBarChart";
import OrganizerDetailCards from "../../components/organizerPageComponent/dashboard/OrganizerDetailCards";

const OrganizerDashboardPage = () => {
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

        <div className="organizer-header">
            <h3>Dashboard</h3>
        </div>

        <OrganizerDetailCards oName={userInfo.full_name} />

        <TicketSalesBarChart oEmail={userInfo.email} />
        </>
    );
};

export default OrganizerDashboardPage;