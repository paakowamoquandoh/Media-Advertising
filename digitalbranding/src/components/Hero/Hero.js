import {  } from "./hero.css";

function HeroSection(props) {
    return(
        <>
        <div className={props.className}>
           <img alt="heroImage" src={props.heroImage}/>

           <div className={props.textClass}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
            {props.btnText}
            </a>
           </div>
        </div>
        </>
    )    
}


export default HeroSection;