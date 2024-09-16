import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";
import ActiveTicketsSection from "../../components/attendeepageComponent/dashboard/ActiveTicketsSection";
import UpcomingEventsSection from "../../components/attendeepageComponent/dashboard/UpcomingEventsSection";
import MoneySpentSection from "../../components/attendeepageComponent/dashboard/MoneySpentSection";

const DashboardPage = () => {
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

    return (
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="Dashboard" />
            <div className="main-section-first-row">
                <ActiveTicketsSection userID={userInfo.id} />
                <UpcomingEventsSection userID={userInfo.id} />
            </div>
            <div className="main-section-first-row">
                <MoneySpentSection userID={userInfo.id} />
            </div>
        </>
    );
};

export default DashboardPage;
