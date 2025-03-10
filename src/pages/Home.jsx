import FAQ from "../components/Home/FAQ";
import Gallery from "../components/Home/Gallery";
import GradientBg from "../components/Home/GradientBg";
import Hero from "../components/Home/Hero";
import Video from "../components/Home/Video";
import Graph2 from "../components/Home/Graph2";
import Graph from "../components/Home/Graph";
import Quote from "../components/Home/Quote";
import Preview from "../components/Home/Preview";
import Services from "../components/Home/Services";

import Offers from "../components/Home/Offers";
import CarouselCard from "../components/Home/CarouselCard";
import CTABanner from "../components/Home/CTABanner";
import ContactForm from "../components/Home/Contact";

const LandingPage = () => {
  return (
    <div className=" w-full  z-0 ">
      {/**
          <div
          className="fixed inset-0 -z-10 w-full h-screen bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(./BlurBg.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          />
          */}

      {/* Main Content */}
      <main className="w-full overflow-x-hidden z-0">
        <Hero />
        <CarouselCard />
        <div className="  py-5  ">
          <div className="bg-gradient-to-b from-[#FFE49F] to-[#A18746]  p-16 w-[80vw] rounded mx-auto  ">
            <div className="bg-black w-[70vw] rounded mx-auto shadow-[0_0px_50px_rgba(0,0,0)]  ">
              <Graph />
            </div>
          </div>
        </div>

        <Quote />
        <Gallery />
        <CTABanner />
        <Preview />
        <GradientBg />
        <CTABanner />

        <Services />
        <FAQ />
        <div className=" h-[55vh]  bg-gradient-to-l from-[#b38e43] to-[#91712d] flex items-center justify-center py-60 ">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
