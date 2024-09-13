import LoggedInNavBar from "../../components/dashboardpageComponent/LoggedInNavBar";
import { useUser } from "../../hooks/useUser";

const AttendeeProfilePage = () => {
    const { userInfo } = useUser();
    
    if(!userInfo) return <p>Loading!</p>;

    const firstName = userInfo.full_name.split(' ')[0];

    return(
        <>
            <LoggedInNavBar fullname={firstName} />
            <div className="user-profile-container" style={{ backgroundColor: "#FFFFFF", marginTop: 20 }}>
                <h1>User Profile</h1>
                <p>Here you can edit your profile</p>
                <p>Okay take care {userInfo.full_name}</p>
            </div>
        </>        
    );
};

export default AttendeeProfilePage;