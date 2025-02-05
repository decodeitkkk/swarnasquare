import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div className="h-screen">
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-10">
        <h1 className="text-6xl md:text-[128px] font-droid font-medium leading-10 md:leading-[95px]">
          <span>"Exclu</span>
          <span className="font-shalimar text-[80px] md:text-[150px] text-[#FFE49F]">
            S
          </span>
          <span>ivity</span>
          <br />
          <span className="font-normal font-comfortaa text-3xl md:text-[64px] md:ml-16">
            In Every Carat
          </span>
          <span className="text-4xl md:text-7xl font-droid font-medium leading-10 md:leading-[80px]">
            "
          </span>
        </h1>

        <div className="md:text-2xl font-playfair">
          <span>Exclusive Designs | Gold</span>
          <span className="font-romanesco text-[#CAB276] text-[48px] md:text-[96px] pt-2">
            {" "}
            2
          </span>
          <span>Gold Settlement | Real Time Rates</span>
        </div>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-lg bg-transparent border-gradient md:h-[64px]">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full text-center md:w-[60%] font-comfortaa px-6 py-2 bg-transparent placeholder:text-[#FFE49F] 
              border-transparent focus:border-transparent focus:ring-0 text-[#FFE49F]
              transition-all duration-200"
          />
          <button
            className="w-[98%] md:w-[40%] bg-[#FFE49F] text-black py-1 px-1 m-1 font-comfortaa font-semibold 
              hover:bg-[#FFE49F] transition-colors duration-200"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
