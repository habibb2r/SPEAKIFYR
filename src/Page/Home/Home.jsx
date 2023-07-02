import { Helmet } from "react-helmet";
import Banner from "./HomeComponents/Banner";
import PopularInstructor from "./HomeComponents/PopularInstructor";
import PopularClasses from "./HomeComponents/PopularClasses";
import SlidingSection from "./HomeComponents/SlidingSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SPEAKIFYR | Home</title>
            </Helmet>
            <Banner></Banner>
            <SlidingSection></SlidingSection>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;