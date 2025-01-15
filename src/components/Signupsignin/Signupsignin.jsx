import React, { useState } from "react";

const Signupsignin = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  return (
    <div className="font-sans min-h-screen bg-[#1f2029] text-gray-400 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Toggle Header */}
        <div className="text-center mb-8">
          <h6 className="text-lg font-semibold uppercase space-x-4 pb-3">
            <span className={!isSignUp ? "text-white" : ""}>Log In</span>
            <span className={isSignUp ? "text-white" : ""}>Sign Up</span>
          </h6>
          {/* Toggle Button */}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="block mx-auto w-16 h-4 bg-[#ffeba7] rounded-full relative cursor-pointer"
          >
            <span
              className={`absolute top-[-12px] left-[-10px] w-9 h-9 bg-[#6B1F05] rounded-full transition-transform duration-500 ${
                isSignUp ? "translate-x-[44px]" : "translate-x-0"
              }`}
            ></span>
          </button>
        </div>
        {/* Card Container with Background Image */}
        <div className="w-full h-[400px] bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg')] bg-top bg-no-repeat bg-[#2a2b38] rounded-lg shadow-lg flex items-center justify-center transform-style-3d backface-hidden">
          {isSignUp ? (
            // Sign Up Card
            <div className="space-y-6 px-8">
              <h4 className="text-xl font-semibold text-white text-center">
                Sign Up
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-[#1f2029] text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <i className="absolute top-1/2 left-4 text-[#ffeba7] transform -translate-y-1/2 uil uil-user"></i>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#1f2029] text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <i className="absolute top-1/2 left-4 text-[#ffeba7] transform -translate-y-1/2 uil uil-at"></i>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full bg-[#1f2029] text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <i className="absolute top-1/2 left-4 text-[#ffeba7] transform -translate-y-1/2 uil uil-lock-alt"></i>
              </div>
              <button className="w-full py-2 text-xl bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all shadow-[0_0_4px_2px_rgba(255,235,167,0.7)]">
                Submit
              </button>
            </div>
          ) : (
            // Log In Card
            <div className="space-y-6 px-8">
              <h4 className="text-xl font-semibold font-sans text-white text-center">
                Log In
              </h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#1f2029] text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <i className="absolute top-1/2 left-4 text-[#ffeba7] transform -translate-y-1/2 uil uil-at"></i>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full bg-[#1f2029] text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <i className="absolute top-1/2 left-4 text-[#ffeba7] transform -translate-y-1/2 uil uil-lock-alt"></i>
              </div>
              <button className="w-full py-2 text-xl bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all shadow-[0_0_4px_2px_rgba(255,235,167,0.7)]">
                Submit
              </button>
              <p className="mt-4 text-sm text-center">
                <a href="#" className="hover:text-[#ffeba7]">
                  Forgot your password?
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signupsignin;
