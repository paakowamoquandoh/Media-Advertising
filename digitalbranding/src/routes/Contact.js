import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";

function ContactUs() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="homeHero"
        textClass="heroText"
        heroImage="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="We value your feedback and inquiries"
        text="Our dedicated team is here to assist you."
        btnText="Contact Us"
        btnClass="homeBtn"
        url="/"
        />
        </>
    )   
}

export default ContactUs;