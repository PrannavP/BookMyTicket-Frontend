import NavBar from "../components/homepageComponent/NavBar";
import HeroSection from '../components/homepageComponent/HeroSection';
import FeaturesSection from "../components/homepageComponent/FeaturesSection";
import Testimonials from "../components/homepageComponent/Testimonials";
import Footer from "../components/homepageComponent/Footer";

const HomePage = () => {
    return(
		<>
			<NavBar />
			<HeroSection />
			<FeaturesSection />
			<Testimonials />
			<Footer />
		</>
    )
};

export default HomePage;