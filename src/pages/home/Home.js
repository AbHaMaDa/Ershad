import DiscoverSection from "../../components/discoverSection/DiscoverSection";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Platform from "../../components/platformSection/Platform";
import ProfessionalJourney from "../../components/professionalJourneySection/ProfessionalJourney";
import "./home.scss"


const Home =()=>{
    return(
        
<>
        <Navbar/>
        <div className="main">
            <ProfessionalJourney/>
            <Platform/>
            <DiscoverSection/>
        
        </div>
        <Footer/>
</>

    )
}

export default Home;