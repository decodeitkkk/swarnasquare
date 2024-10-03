import heroBg from "../../assets/Home/hero-bg.png"
const LandingPage = () => {
  return (
    <div className="h-screen"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%", // Set your desired width
    }}
    >LandingPage</div>
  )
}

export default LandingPage