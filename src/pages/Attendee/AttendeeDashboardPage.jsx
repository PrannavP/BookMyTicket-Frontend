import { useEffect } from "react";

// import LoggedInNavBar from "../../components/dashboardpageComponent/LoggedInNavBar";
// import LogoutButton from "../../components/dashboardpageComponent/LogoutButton";
import SideNavBar from "../../components/attendeepageComponent/SideNavBar";

import { useUser } from "../../hooks/useUser";

const DashboardPage = () => {
    const TOKEN = localStorage.getItem('token');
    
    useEffect(() => {
        if(!TOKEN){
            window.location.href = '/login';
        }
    }, [TOKEN]);

    const { userInfo, error } = useUser();

    if(!userInfo) return <p>Loading...</p>;

    if(error) return <p>{error}</p>

    return (
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
        </>
    );
};

export default DashboardPage;