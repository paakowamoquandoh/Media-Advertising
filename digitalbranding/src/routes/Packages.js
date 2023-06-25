import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import PackImg from "../media/images/media.jpg";

function Packages() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={PackImg}
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