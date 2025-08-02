import Hero from '../features/home/Hero';
import Services from '../features/home//Services';
import FeaturedProject from '../features/home//FeaturedProject';
import Testimonials from '../features/home//Testimonials';
import AboutUs from '../features/home//AboutUs';
import CallToAction from '../features/home/CallToAction';

function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <FeaturedProject />
            <Services />
            <Testimonials />
            <CallToAction />
        </>
    );
}

export default Home;
