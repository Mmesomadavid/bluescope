import Company from "../components/Home/Company";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import KeyFeatures from "../components/Home/KeyFeatures";
import SimplifyCompliance from "../components/Home/SimplifyCompliance";
import Stats from "../components/Home/Stats";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Company/>
      <Stats/>
      <HowItWorks/>
      <SimplifyCompliance/>
      <KeyFeatures/>
    </div>
  );
}

export default Home;
