import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";

function Packages() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Transform your Brand"
        text="Choose our revolutionary Digital experiences."
        btnText="Request a Quote"
        btnClass="homeBtn"
        url="/"
        />
        </>
    )   
}

export default Packages;