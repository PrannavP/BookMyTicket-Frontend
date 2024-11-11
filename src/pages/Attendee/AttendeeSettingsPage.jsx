import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

import '../../styles/attendee_styles/attendee_settings_page.css';

import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";
import UpdateDetailsFormComponent from "../../components/attendeepageComponent/settings-page/UpdateDetailsFormComponent";
import ChangePasswordComponent from "../../components/attendeepageComponent/settings-page/ChangePasswordComponent";

const AttendeeSettingsPage = () => {
    const TOKEN = localStorage.getItem('token');

    useEffect(() => {
        if (!TOKEN) {
            window.location.href = '/login';
        }
    }, [TOKEN]);

    const { userInfo, error } = useUser();

    if (!userInfo) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="Settings" />
            <UpdateDetailsFormComponent userInfo={userInfo} />
            <ChangePasswordComponent uid={userInfo.id} />
        </>
    );
};

export default AttendeeSettingsPage;