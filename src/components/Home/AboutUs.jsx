import React from "react";

const ContactUs = () => {

  function handleSubmit() {
    // Your click logic here
  }
  return (
    <div className="relative w-full min-h-[500px] bg-gradient-to-r from-[#A18645] to-[#CAB276] flex items-center justify-center mt-[200px]">
      <h1 className="absolute top-[-30px] text-center text-white text-6xl font-raleway font-bold">
        CONTACT US
      </h1>
      <form className="p-6">
        <div className="mb-4 w-[400px] md:w-[700px]">
          <input
            type="text"
            placeholder="Name*"
            className="w-full p-3 bg-[#191924] text-[#CAB276] placeholder:text-[#CAB276] border-transparent focus:border-transparent focus:ring-0"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 bg-[#191924] text-[#CAB276] placeholder:text-[#CAB276] border-transparent focus:border-transparent focus:ring-0 "
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-[#191924] text-[#CAB276] placeholder:text-[#CAB276] border-transparent focus:border-transparent focus:ring-0 h-28"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-[150px] py-2 bg-[#FFE49F] text-black font-raleway font-medium rounded-lg text-[25px] hover:bg-[#DFC47A]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
