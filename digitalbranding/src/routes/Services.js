import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";

function Services() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage="https://images.pexels.com/photos/8549940/pexels-photo-8549940.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="CREATIVE DIGITAL AGENCY"
        text="Focused on Growing Brands Online"
        btnText="Speak to Us"
        btnClass="homeBtn"
        url="/"
        />
        </>
    )     
}

export default Services;