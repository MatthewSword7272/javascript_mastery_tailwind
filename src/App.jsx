import ButtonGradient from "./assets/svg/ButtonGradient";
import BenefitsSection from "./components/BenefitsSection";
import CollaborationSection from "./components/CollaborationSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <HeroSection />
        <BenefitsSection/>
        <CollaborationSection />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
