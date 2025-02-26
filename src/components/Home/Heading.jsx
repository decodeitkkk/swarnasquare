import React from "react";

const Heading = ({ heading }) => {
  return (
    <>
      <div className="md:text-6xl text-2xl text-center my-5 font-extrabold bg-gradient-to-b from-gray-100 to-yellow-300 bg-clip-text text-transparent uppercase">
        {heading}
      </div>
    </>
  );
};

const Heading2 = ({ heading }) => {
  return (
    <>
      <div className="  text-3xl md:text-5xl font-raleway font-bold text-white  backdrop-blur-sm bg-black/30  border-[0.51px] border-white py-2 px-4 rounded-md w-max mx-auto uppercase ">
        {heading}
      </div>
    </>
  );
};

export { Heading, Heading2 };
