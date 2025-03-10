import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heading2 } from "./Heading";

const stepImages = [
    "./BlurBg.png",
    "./Preview1.png",
    "/ring.jpg",
    "/ring2.jpg",
    "/ring.jpg",
    "/ring2.jpg",
    "/ring.jpg",
];

const GradientBg = () => {
    const [hoveredImage, setHoveredImage] = useState(stepImages[0]);

    return (
        <div className="md:h-[90vh] bg-[#CAB276]/30 backdrop-blur-xl mt-20 pb-20">
            <div className=" flex flex-col items-center w-full">
                <div className=" -mt-8  md:-mt-10 mb-10">
                    <Heading2 heading= "LET'S BEGIN" />
                </div>

                <div className="flex flex-col md:flex-row  w-full justify-center items-center md:gap-x-[200px] md:ml-[80px]  ">
                    {/* Image Container */}
                    <div className=" md:w-80 md:h-72 w-72 h-72 mx-5 my-10 border-4 border-[#FFE49F] shadow-[0px_0px_20px_rgba(255,228,159,0.6)] rounded-lg flex justify-center items-center overflow-hidden ">
                        <img
                            src={hoveredImage}
                            alt="Step Image"
                            width="100%"
                            height="100%"
                            className=" object-cover object-center duration-700 ease-in-out transform "
                            
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
                                className={`flex items-center text-[#CAB276] hover:text-[#2F2F2F] bg-[#2F2F2F] hover:bg-[#CAB276] w-64 md:w-[450px] h-16 px-6 py-3 rounded-full hover:shadow-[0px_0px_20px_rgba(255,228,159,0.4)] text-lg cursor-pointer transform duration-700  ${
                                    index === 0
                                        ? "md:-translate-x-10"
                                        : index === 1
                                        ? "md:-translate-x-6"
                                        : index === 2
                                        ? "md:-translate-x-5"
                                        : index === 3
                                        ? "md:-translate-x-6"
                                        : "md:-translate-x-10"
                                }`}
                                onMouseEnter={() =>
                                    setHoveredImage(stepImages[index])
                                }
                                onMouseLeave={() =>
                                    setHoveredImage(stepImages[0])
                                } // Reset to default image
                            >
                                <span className="w-8 h-8 flex justify-center items-center bg-white text-black rounded-full mr-4 font-bold">
                                    {index + 1}
                                </span>
                                <span className="font-semibold font-raleway">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientBg;
