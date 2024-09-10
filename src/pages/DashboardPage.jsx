import axios from "axios";
// import { useHistory } from 'react-router-dom';
import LogoutButton from "../components/dashboardpageComponent/LogoutButton";
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
                window.location.href = './login';
                // history.push('/login');
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
            <LogoutButton />
        </>
    );
};

export default DashboardPage;