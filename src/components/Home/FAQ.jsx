import React, { useState } from "react";
import { Heading2 } from "./Heading";

const faqs = [
  {
    question: "What is Swarna Square ?",
    answer: "Swarna Square is a premium platform for gold investments.",
  },
  {
    question: "How do I order gold ?",
    answer:
      "You can order gold through our platform by selecting the desired amount and proceeding with secure payment options.",
  },
  {
    question: "How does this work ?",
    answer:
      "Our platform allows users to buy, store, and manage their gold investments easily.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#CAB276]/40 h-auto pb-10 ">
        <div className="flex flex-col">
          <div className=" -mt-8 md:-mt-10 mb-10  ">
            <Heading2 heading="faq" />
          </div>
          <div className=" w-[80%] mx-auto  text-black ">
            <div className=" ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={` ${
                    index !== 2 ? "border-b border-gray-800" : ""
                  } `}
                >
                  <button
                    className={`${
                      index === 0
                        ? "rounded-t-lg"
                        : index === 2 && openIndex === 2
                        ? "rounded-b-none"
                        : index === 2 && openIndex !== 2
                        ? "rounded-b-lg"
                        : index === 0 && openIndex !== 2
                    }
                 w-full flex justify-between text-left md:items-center px-3 md:px-6 py-4 text-base md:text-lg font-comfortaa bg-[#CAB276] transform duration-500 `}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-lg font-comfortaa">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 text-black bg-[#FFE49F66]/40 text-sm md:text-base rounded-b-lg font-comfortaa text-md mb-2 transform duration-500 ">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
