import img from "../../assets/AboutUs/who-we-are-bg.png"

const WhyUs = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-secondary bg-opacity-70 p-8 py-12 rounded-xl text-center max-w-3xl lg:h-[300px] h-auto mx-auto">
          <h1 className="text-3xl font-semibold mb-8">What We Do?</h1>
          <p className="text-gray-700">
            Ifelis ipsum, luctus at ante at, hendrerit congue lacus. Phasellus blandit tincidunt sapien ut
            suscipit. Quisque interdum mauris at diam egestas tincidunt. Sed dignissim erat porttitor mauris
            volutpat dignissim. Suspendisse potenti! Pellentesque a scelerisque ipsum, et efficitur magna.
            Curabitur ac purus pharetra lorem commodo vulputate. Nulla sit amet augue consequat, malesuada
            tortor nec, pretium libero. Sed ut massa aliquam, dapibus neque vel, congue quam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs