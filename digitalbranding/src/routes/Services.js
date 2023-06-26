import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import WeOffer from "../components/SectionTwo/ServicesSec";
import ServeImg from "../media/images/media6.jpg";

function Services() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={ServeImg}
        title="CREATIVE DIGITAL AGENCY"
        text="Focused on Growing Brands Online"
        btnText="Speak to Us"
        btnClass="homeBtn"
        url="/"
        />
        <WeOffer/>
        <Footer/>
        </>
    )     
}

export default Services;