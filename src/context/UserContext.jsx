// src/contexts/UserContext.jsx
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import PropTypes from "prop-types";

export const UserContext = createContext(); // Export UserContext

export const UserProvider = ({ children }) => {
    UserProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    // Function to check if the token is expired
    const isTokenExpired = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Convert to seconds
            return decodedToken.exp < currentTime; // True if the token is expired
        } catch (err) {
            console.error("Error decoding token: ", err);
            return true; // Consider invalid tokens as expired
        }
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            const TOKEN = localStorage.getItem('token');

            if (!TOKEN || isTokenExpired(TOKEN)) {
                console.log("Token is missing or expired. Redirecting...");
                setUserInfo(null);
                localStorage.removeItem('token');
                return;
            }

            try {
                const decodedToken = jwtDecode(TOKEN);
                // console.log("Token is valid, decoded token:", decodedToken);
                const userId = decodedToken.id;

                const response = await axios.get(`http://localhost:3000/userinfo/${userId}`, {
                    headers: {
                        'x-auth-token': TOKEN,
                    },
                });

                // console.log("User info fetched: ", response.data.user);
                setUserInfo(response.data.user);
            } catch (err) {
                console.error('Error fetching user info: ', err);
                setError("Something went wrong while getting user data", err);

                setTimeout(() => {
                    localStorage.removeItem('token');
                    setUserInfo(null);
                }, 1200);
            }
        };

        fetchUserInfo();
    }, []);


    return (
        <UserContext.Provider value={{ userInfo, error }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;