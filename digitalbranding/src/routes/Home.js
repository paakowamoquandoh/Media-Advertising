import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";


function HomePage() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="homeHero"
        heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="Transform your Brand"
        text="Choose our revolutionary Digital experiences."
        />
        </>
    )    
}

export default HomePage;