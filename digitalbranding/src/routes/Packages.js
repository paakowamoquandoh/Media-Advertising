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
        title="Full Service Digital Agency"
        text="Providing Custom digital experiences."
        btnText="Learn More"
        btnClass="homeBtn"
        url="/"
        />
        </>
    )   
}

export default Packages;