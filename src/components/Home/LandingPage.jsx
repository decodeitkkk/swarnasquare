
import AboutUs from "./AboutUs"
import Offers from "./Offers"
import FAQ from "./FAQ"
import Gallery from "./Gallery"
import GradientBg from "./GradientBg"
import Hero from "./Hero"
import Video from "./Video"
import Graph from "./Graph";
import Quote from "./Quote";
import Preview from "./Preview"
import Services from "./Services"
import Navbar from "../Common/Nav"
import Footer from "../Common/Footer"


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
        <Video />
        <Graph />
        <Quote />
        <Gallery />
        <Preview />
        <GradientBg />
        <Offers />
        <Services />
        <FAQ />
        <AboutUs />
      </main>

      
    </div>
  );
};

export default LandingPage;
