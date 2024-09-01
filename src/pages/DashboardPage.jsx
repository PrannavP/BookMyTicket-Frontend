import axios from "axios";

import LogoutButton from "../components/dashboardpageComponent/LogoutButton";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const DashboardPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const TOKEN = localStorage.getItem('token');

            if(!TOKEN){
                setError('No token found');
                return;
            }

            try{
                // Decode the token to get user ID
                const decodedToken = jwtDecode(TOKEN);
                const userId = decodedToken.id; 

                // fetch user data using userID
                const response = await axios.get(`http://localhost:3000/userinfo/${userId}`, {
                    headers:{
                        'x-auth-token': TOKEN,
                    },
                });
                // console.log(response.data);

                setUserInfo(response.data.user);
            }catch(err){
                setError(err.response?.data?.message || 'Error fetching data');
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <h1>Dashboard</h1>

            

















            {/* {error ? (
                <>
                    <p>{error}</p>
                    <Navigate to="/" />
                </>
            ) : userInfo ? (
                <>
                    <p>Name: {userInfo.full_name}</p>
                    <p>Address: {userInfo.address}</p>
                    <p>Contact: {userInfo.contact_number}</p>
                    <p>Role: {userInfo.role}</p>
                </>
            ) : (
                <p>Loading...</p>
            )} */}

            <LogoutButton />
        </>
    );
};

export default DashboardPage;