

const Preview = () => {
  return (
    <div className="grid grid-cols-2 gap-0 min-h-screen my-[186px]">
      {/* Left Text Section */}
      <div className="bg-[#CAB276] p-10 flex flex-col justify-center h-[478px]">
        <h2 className="text-3xl font-bold">Heritage in Every Detail</h2>
        <p className="mt-4 text-lg">
          We redefine the art of jewelry manufacturing with a commitment to
          precision, elegance, and an impeccable quality finish. Our heritage in
          fine jewelry craftsmanship stands as a testament to our dedication to
          excellence.
        </p>
        <a href="#" className="mt-4 text-right  underline">
          Discover our brand story
        </a>
      </div>
      {/* Right img Section */}
      <div className="relative w-full h-full">
        <img
          src="./Preview2.png"
          alt="Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Bottom Left img Section */}
      <div className="relative w-full h-full">
        <img
          src="./Preview1.png"
          alt="Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Bottom Right Text Section */}
      <div className="bg-[#CAB276] p-10 flex flex-col justify-center h-[478px]">
        <h2 className="text-3xl font-bold">Where Quality Shines</h2>
        <p className="mt-4 text-lg">
          Each product undergoes rigorous testing and inspection to guarantee
          the highest standards are met. We strive for excellence in every
          strand of our craftsmanship, ensuring a flawless finish that our
          partners can rely on.
        </p>
        <a href="#" className="text-right mt-4 underline">
          Know how we do it
        </a>
      </div>
    </div>
  );
};

export default Preview;
