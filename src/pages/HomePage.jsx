import NavBar from "../components/homepageComponent/NavBar";
import HeroSection from '../components/homepageComponent/HeroSection';
import FeaturesSection from "../components/homepageComponent/FeaturesSection";
import Testimonials from "../components/homepageComponent/Testimonials";
import Footer from "../components/homepageComponent/Footer";
import LoggedInNavBar from "../components/dashboardpageComponent/LoggedInNavBar";

import { useUser } from "../hooks/useUser";

const HomePage = () => {
	const { userInfo } = useUser();

    return(
		<>
			{userInfo ? <LoggedInNavBar fullname={userInfo.full_name} /> : <NavBar />}
			<HeroSection />
			<FeaturesSection />
			<Testimonials />
			<Footer />
		</>
    )
};

export default HomePage;