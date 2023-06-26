import WeOffer from "./ServicesSec";
import "./servicesSec.css";
import offImg1 from "../../media/images/offers/off6.jpg";
import offImg2 from "../../media/images/offers/off5.jpg";
import offImg3 from "../../media/images/offers/off4.jpg";
import offImg4 from "../../media/images/offers/off3.jpg";
import offImg5 from "../../media/images/offers/off2.jpg";
import offImg6 from "../../media/images/offers/off1.jpg";


function OffersData(props){
    return(
        <div className="offerCard">
            <div className="offerImage">
                <img src={props.image} alt="offerImg" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default OffersData;