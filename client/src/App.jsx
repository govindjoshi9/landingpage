import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import WhyJoin from "./components/WhyJoin";
import JoinNowForm from "./components/JoinNowForm";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <WhyJoin/>
        <JoinNowForm />
        <Footer />
      </div>
    </>
  );
};

export default App;
