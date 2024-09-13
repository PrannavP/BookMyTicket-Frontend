import { useUser } from "../hooks/useUser";

const TestPage = () => {
    const { userInfo } = useUser();

    if(!userInfo) return <p>Loading....</p>;

    return(
        <>
            <h1>Test Page</h1>
            <p>Hello Dear, {userInfo.full_name}</p>
        </>
    );
};

export default TestPage;