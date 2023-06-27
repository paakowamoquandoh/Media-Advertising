import HomeImg from "../media/images/media1.jpg";
import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/SectionOne/Section";
import WeOffer from "../components/SectionTwo/ServicesSec";
import Footer from "../components/footer/Footer";


function HomePage() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage={HomeImg}
        title="Transform your Brand"
        text="Choose our revolutionary Digital experiences."
        btnText="Request a Quote"
        btnClass="homeBtn"
        url="/"
        />
        <FeaturesSection/>
        <WeOffer/>
        <Footer/>
        </>
    )    
}

export default HomePage;

// https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80