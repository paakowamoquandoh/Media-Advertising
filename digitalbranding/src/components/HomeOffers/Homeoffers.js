import "../SectionTwo/servicesSec.css";
import HomeOffers from "./HomeOffersData";


function WeOfferHome(){
    return(
        <div className="offers">
            <h1>What we Offer<i>!</i></h1>
            <p>Partner with our leading digital marketing agency to increase brand awareness</p>

            <div className="offerCard">
                <HomeOffers
                
                heading="Brand Identity"
                description="Make your Brand recognisable, differentiated and appealing to the target audience with styles to tone your voice."
                />
                <HomeOffers
               
                heading="Personal Branding"
                description="Build yourself and reflect your values to attract the right responses from your audience."
                />
                <HomeOffers
                
                heading="Media Buy"
                description="Reach your audience in the right places at the right frequency at the right price. From Traditional media to digital media or an integrated mix."
                />
                           
            </div>
            <div className="offerCard">
               
                <HomeOffers
                
                heading="General Marketing Support"
                description="Outsource all your marketing challenges and pains to us to assist you with, From Brand, Customer value management to customer response management."
                />                
                <HomeOffers
               
                heading="Events and BTL activations"
                description="Deliver a sensory experience using tactical activities that will appeal to your audiences emotions and drive action."
                />
                <HomeOffers
              
                heading="Digital Marketing Campaigns"
                description="Optimise your online using all types of digital media not limited to websites, banners and search engine"
                />
               
            </div>
            <div className="offerCard">
                
                <HomeOffers
                
                heading="Video Advertising and Production"
                description="Create compelling video and cinematic material to compliment your marketing communication."
                />
                <HomeOffers
               
                heading="Social Media Marketing"
                description="Drive engagement or reach for your business using social media platfroms like Facebool, Twitter, youtube, Instagram or LinkedIn."
                />
                <HomeOffers
                
                heading="Content Creation and Marketing"
                description="Drive emotion and action in your audience through viewable and shareable content of all media types."
                />

            </div>
        </div>
    )
}

export default WeOfferHome;