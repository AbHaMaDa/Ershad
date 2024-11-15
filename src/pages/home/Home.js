import DiscoverSection from "../../components/discoverSection/DiscoverSection";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Platform from "../../components/platformSection/Platform";
import ProfessionalJourney from "../../components/professionalJourneySection/ProfessionalJourney";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <ProfessionalJourney />
        <Platform />
        <DiscoverSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
