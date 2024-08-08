const LogoutButton = () => {
    const handleLogout = () => {
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