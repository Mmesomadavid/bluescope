import Company from "../components/Home/Company";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
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
    </div>
  );
}

export default Home;
