import { Component } from "react";
import "../SectionOne/section.css";
import featImg1 from "../../media/images/media1.webp";
import featImg2 from "../../media/images/media2.webp";
import featImg3 from "../../media/images/media3.webp";
import featImg4 from "../../media/images/media.webp";


class FeaturesData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="featText">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p><hr/>
                    <a href="" className="featBtn">{this.props.button}</a>
                </div>
                <div className="featImage">
                     <img alt="featureimg" src={this.props.image1} />
                     <img alt="featureimg" src={this.props.image2} />
                </div>
            </div>
            
           
        )
    }
}

export default FeaturesData;

