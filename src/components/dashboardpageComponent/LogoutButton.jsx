const LogoutButton = () => {
    const handleLogout = () => {
        // delete localstorage
        localStorage.removeItem('token');

        // redirect to login page
        window.location.href = '/login';
    };

    return(
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default LogoutButton;