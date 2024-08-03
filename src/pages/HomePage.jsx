import NavBar from "../components/homepage/NavBar";
import HeroSection from '../components/homepage/HeroSection';
import FeaturesSection from "../components/homepage/FeaturesSection";
import Testimonials from "../components/homepage/Testimonials";
import Footer from "../components/homepage/Footer";

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