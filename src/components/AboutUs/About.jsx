import React from "react";
import { Heading2 } from "../Home/Heading";

const About = () => {
  return (
    <>
      <Heading2 heading="About us" />
      <div className="relative flex justify-center items-center h-screen">
        {/* Bottom Layer */}
        <div className="absolute w-[80%] h-[75%] bg-black/30 shadow-2xl backdrop-blur-xl rounded-xl"></div>

        {/* Top Layer */}
        <div className="relative z-10 text-white text-xl font-semibold bg-black/30 w-full h-full backdrop-blur-sm flex items-center justify-center">
          hello, I am top layer
        </div>
      </div>
      
    </>
  );
};

export default About;
