import FAQSection from "../components/AboutUs/FAQ";
import HowWeDo from "../components/AboutUs/HowWeDo";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import WhyUs from "../components/AboutUs/WhyUs";

const AboutUs = () => {
    return (
        <div>
            <WhoWeAre />
            <WhatWeDo />
            <WhyUs />
            <HowWeDo />
            <FAQSection />
        </div>
    );
};

export default AboutUs;
