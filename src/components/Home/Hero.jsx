import heroBg from "../../assets/Home/hero-bg.png"
const Hero = () => {
  return (
    <div className="h-screen"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%", 
    }}
    ></div>
  )
}

export default Hero