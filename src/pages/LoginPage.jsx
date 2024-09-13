import LoginForm from "../components/loginpageComponent/LoginForm";

const LoginPage = () => {
    const TOKEN = localStorage.getItem('token');

    if(TOKEN){
        window.location.href = "/attendeedashboard";
    }else{
        return(
            <LoginForm />
        );
    }
};

export default LoginPage;