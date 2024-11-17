// import Navbar from "../../Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Countries from "./Countries";
import VideoSection from "./VideoSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <WhyChooseUs></WhyChooseUs>
            <Countries></Countries>
            <VideoSection></VideoSection>
        </div>
    );
};

export default Home;