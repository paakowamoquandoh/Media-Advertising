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
           
            <FeaturesData
            className="firstFeature"
            heading="Create A Unique Brand Identity"
            description="Crafting a unique brand identity is an essential undertaking for any business or organization. It goes beyond merely having a recognizable logo or catchy tagline; it encompasses the core values, personality, and promise that set a brand apart from its competitors.

            To create a unique brand identity, one must delve into understanding the target audience and their desires, needs, and aspirations. This knowledge serves as the foundation upon which the brand's identity is built. By aligning the brand's values with those of the target audience, a deep emotional connection can be forged, fostering loyalty and advocacy.

            Consistency is key"
            button="Request a Proposal"
            image1={featImg1}
            image2={featImg2}
            />

            <FeaturesData
            className="secondFeature"
            heading="Engage With Your Audience"
            description="Experience the essence of effective communication and connection in various contexts, whether it be business, education, or entertainment. When we engage with our audience, we actively involve and interact with them, fostering a deeper connection and creating a more meaningful experience"
            button="Learn More"
            image1={featImg4}
            image2={featImg3}
            />
        </div>
    )
}


export default FeaturesSection;