import featImg1 from "../../media/images/media1.webp";
import featImg2 from "../../media/images/media2.webp";
import featImg3 from "../../media/images/media3.webp";
import featImg4 from "../../media/images/media.webp";
import "../SectionOne/section.css"

const FeaturesSection = () => {
    return (
        <div className="mainSection">
            <h1>Our Main Features</h1>
            <p>Integrating brand strategies with digital initiatives to improve consumer experiences across touchpoints</p>

            <div className="firstFeature">
                <div className="featText">
                    <h2>Create A Unique Brand Identity</h2>
                    <p>Crafting a unique brand identity is an essential undertaking for any business or organization. It goes beyond merely having a recognizable logo or catchy tagline; it encompasses the core values, personality, and promise that set a brand apart from its competitors. To create a unique brand identity, one must delve into understanding the target audience and their desires, needs, and aspirations. This knowledge serves as the foundation upon which the brand's identity is built. By aligning the brand's values with those of the target audience, a deep emotional connection can be forged, fostering loyalty and advocacy. Consistency is key</p>
                </div>
                <div className="featImage">
                     <img alt="featureimg" src={featImg1} />
                     <img alt="featureimg" src={featImg2} />
                </div>
            </div>
        </div>
    )
}


export default FeaturesSection;