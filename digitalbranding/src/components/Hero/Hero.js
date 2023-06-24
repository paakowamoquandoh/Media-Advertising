import {  } from "./hero.css";

function HeroSection(props) {
    return(
        <>
        <div className={props.className}>
           <img alt="heroImage" src={props.heroImage}/>

           <div className="heroText">
            <h1>{props.title}</h1>
            <p>{props.text }</p>
            <a href="/">
            Request a Quote
            </a>
           </div>
        </div>
        </>
    )    
}


{/* <div className="heroText">
            <h1></h1>
            <p></p>
            <a href="/">
            Request a Quote
            </a>
           </div> */}

export default HeroSection;