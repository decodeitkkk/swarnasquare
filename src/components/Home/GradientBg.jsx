import { useState } from "react";
import { motion } from "framer-motion";

const stepImages = [
  "/images/step1.jpg",
  "./BlurBg.png",
  "./Preview1.png",
  "/images/step3.jpg",
  "/images/step4.jpg",
  "/images/step5.jpg",
];

const GradientBg = () => {
  const [hoveredImage, setHoveredImage] = useState(stepImages[0]);

  return (
    <div className="h-[580px] bg-[#CAB276] bg-opacity-30 my-[200px]">
      <div className="relative flex flex-col items-center w-full">
        <h2 className="absolute top-[-32px] text-7xl font-raleway font-bold text-white mb-9">
          LET'S BEGIN
        </h2>
        <div className="flex w-full justify-center items-center gap-x-[200px] ml-[80px] mt-[100px]">
          {/* Image Container */}
          <div className="relative w-[300px] h-[330px] border-4 border-[#FFE49F] shadow-[0px_0px_20px_rgba(255,228,159,0.6)] rounded-lg flex justify-center items-center">
            <motion.img
              src={hoveredImage}
              alt="Step Image"
              width={200}
              height={200}
              className="rounded-lg object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps List */}
          <div className="flex flex-col space-y-4">
            {[
              "Login / Signup",
              "Add funds to Wallet",
              "Book GOLD",
              "Select Design",
              "Settlement in GOLD",
            ].map((step, index) => (
              <div
                key={index}
                className={`flex items-center text-[#CAB276] hover:text-[#2F2F2F] bg-[#2F2F2F] hover:bg-[#CAB276] w-[250px] md:w-[450px] h-[60px] px-6 py-3 rounded-full hover:shadow-[0px_0px_20px_rgba(255,228,159,0.4)] text-lg cursor-pointer transform ${
                  index === 0
                    ? "-translate-x-10"
                    : index === 1
                    ? "-translate-x-6"
                    : index === 2
                    ? "-translate-x-5"
                    : index === 3
                    ? "-translate-x-6"
                    : "-translate-x-10"
                }`}
                onMouseEnter={() => setHoveredImage(stepImages[index])}
                onMouseLeave={() => setHoveredImage(stepImages[0])} // Reset to default image
              >
                <span className="w-8 h-8 flex justify-center items-center bg-white text-black rounded-full mr-4 font-bold">
                  {index + 1}
                </span>
                <span className="font-semibold font-raleway">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBg;


