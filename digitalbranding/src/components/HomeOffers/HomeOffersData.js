import "../SectionTwo/servicesSec.css";


function HomeOffers(props){
    return(
        <div className="dataCard">
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default HomeOffers;