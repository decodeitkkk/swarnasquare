import React, { useState } from "react";

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
    <div className="bg-[#CAB276] bg-opacity-30 h-auto min-h-[340px]">
      <div className="relative w-[80%] mx-auto mt-24 text-black ">
        <div className="relative flex justify-center">
          <h2 className="text-5xl font-raleway text-white font-bold absolute top-[-30px]">
            FAQ
          </h2>
        </div>

        <div className="relative z-10 mt-14">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-comfortaa bg-[#CAB276] rounded-md"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-lg font-comfortaa">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-black bg-white rounded-b-lg font-comfortaa text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
