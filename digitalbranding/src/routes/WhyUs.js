import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import WhyImg from "../media/images/media5.jpg";

function WhyUs() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={WhyImg}
        title="Results-Driven Digital Marketing"
        text="Multi-channel marketing approach focused on increasing visibility and conversions"
        btnText="View Services"
        btnClass="homeBtn"
        url="/"
        />
        <Footer/>
        </>
    )    
}

export default WhyUs;