
import AboutUs from "./AboutUs"
import Demo from "./Demo"
import Flow from "./Flow"
import Gallery from "./Gallery"
import GradientBg from "./GradientBg"
import Hero from "./Hero"
import Preview from "./Preview"
import Quote from "./Quote"
import Services from "./Services"
import TestimonialCarousel from "./Testimonial"
const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Quote/>
      <Flow/>
      <Gallery/>
      <Preview/>
      <GradientBg/>
      <Demo/>
      <Services/>
      <AboutUs/>
      <TestimonialCarousel/>
    </div>
  )
}

export default LandingPage