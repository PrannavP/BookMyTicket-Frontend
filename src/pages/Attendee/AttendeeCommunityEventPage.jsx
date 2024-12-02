import { useEffect } from "react";

import { useUser } from "../../hooks/useUser";

import CommunityEventChatComponent from "../../components/attendeepageComponent/community-page/CommunityEventChatComponent";
import CommunityEventCommentsComponent from "../../components/attendeepageComponent/community-page/CommunityEventCommentsComponent";
import CommunityEventComponent from "../../components/attendeepageComponent/community-page/CommunityEventComponent";
import SideNavBar from "../../components/attendeepageComponent/SideNavBar";
import TopBar from "../../components/attendeepageComponent/TopBar";

const AttendeeCommunityEventPage = () => {
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
        <div>
            <SideNavBar profileImageUrl={userInfo.image} profileName={userInfo.full_name} />
            <TopBar title="Community" />
            <CommunityEventComponent />
            <CommunityEventCommentsComponent />
            {TOKEN && userInfo && <CommunityEventChatComponent uId={userInfo.id} />}
        </div>
    );
};

export default AttendeeCommunityEventPage;