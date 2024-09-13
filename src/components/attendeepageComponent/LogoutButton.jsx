import '../../styles/attendee_styles/logout_button.css';

const LogoutButton = () => {
    const handleLogout = () => {
        // delete localstorage
        localStorage.removeItem('token');

        // redirect to login page
        window.location.href = '/login';
    };

    return(
        <>
            <button className='attendee-logout-button' onClick={handleLogout}>Logout</button>
        </>
    );
};

export default LogoutButton;