import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import HomeImg from "../media/images/media1.jpg";
import FeaturesSection from "../components/SectionOne/Section";


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
        </>
    )    
}

export default HomePage;

// https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80