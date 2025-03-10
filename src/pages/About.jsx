import {
  About,
  FAQSection,
  HowWeDo,
  WhatWeDo,
  WhoWeAre,
  WhyUs,
  CorePrincipals,
  AboutTeam,
} from "../components/AboutUs/index.jsx";

const AboutUs = () => {
  return (
    <div>
      <About />
      <CorePrincipals />
      <AboutTeam />
      
      <FAQSection />    
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
};

export default AboutUs;
