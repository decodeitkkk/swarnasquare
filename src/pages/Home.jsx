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
import AboutUs from "../components/AboutUs";
import Offers from "../components/Home/Offers";

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

                <Graph />
                <Graph2 />
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
