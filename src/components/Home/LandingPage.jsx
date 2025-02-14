
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
    <div className="relative w-full">
      <div
        className="fixed inset-0 -z-10 w-full h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(./BlurBg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="z-20 w-full h-[95px] bg-[#291510] flex items-center justify-center">
        <img
          src="./SSlogo.png"
          alt="Logo"
          className="h-16 w-14 mr-10 max-w-full"
        />
        <h1 className="text-[40px] text-white font-bold text-center">
          SWARNA SQUARE
        </h1>
      </div>

      <header className="sticky top-0 z-30 bg-[#291510] shadow-md">
        <Navbar isFixed={false} />
      </header>

      {/* Main Content */}
      <main className="w-full overflow-x-hidden">
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

      <Footer />
    </div>
  );
};

export default LandingPage;
