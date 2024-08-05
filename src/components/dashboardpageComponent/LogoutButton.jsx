const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.clear();

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