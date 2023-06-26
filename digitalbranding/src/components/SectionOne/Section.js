import featImg1 from "../../media/images/media1.webp";
import featImg2 from "../../media/images/media2.webp";
import featImg3 from "../../media/images/media3.webp";
import featImg4 from "../../media/images/media.webp";
import "../SectionOne/section.css";
import FeaturesData from "../SectionOne/FeaturesData";

const FeaturesSection = () => {
    return (
        <div className="mainSection">
            <h1>Our Main Features</h1>
            <p>Integrating brand strategies with digital initiatives to improve consumer experiences across touchpoints</p>
            <FeaturesData/>
        </div>
    )
}


export default FeaturesSection;