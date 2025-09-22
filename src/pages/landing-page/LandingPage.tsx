import Portfolio from "./Porfolio";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import WhatIDo from "./WhatIDo";
import Hero from "./Hero";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Education />
      <WorkExperience />
      <WhatIDo />
      <Portfolio />
      <Footer />
    </>
  );
};

export default LandingPage;
