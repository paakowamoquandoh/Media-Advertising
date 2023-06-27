import "./servicesSec.css";


function ServiceRoute(props){
    return(
        <div className="dataCard">
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default ServiceRoute;