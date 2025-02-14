import React from 'react'
import { Link } from 'react-router-dom';

const Otp = () => {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center blur-sm bg-fixed"
        style={{
          backgroundImage: "url('/quote-bg.png')",
          zIndex: -1,
        }}
      />
      <div className="font-sans min-h-screen text-gray-400 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <h6 className="text-lg font-semibold uppercase space-x-4 pb-3">
              <h1 className="text-2xl text-white font-bold text-center">
                Sign in to
              </h1>
              <h2 className="text-xl text-[#ffeba7] font-bold text-center mb-4">
                Swarna Square
              </h2>
            </h6>
          </div>
          <div className="w-full h-[350px] bg-[#1f2029] rounded-lg shadow-lg flex items-center justify-center">
            <div className=" flex-col items-center justify-center space-y-6 px-8">
              <h4 className="text-sm font-semibold font-sans text-white text-center mt-4">
                Enter the OTP you recieved on your mobile number
              </h4>
              {/* <div className="relative">                */}
              <div className="flex items-center justify-center gap-3">
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  pattern="\d*"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-white bg-black border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:ring-0 ring-0"
                  maxlength="1"
                />
              </div>
              <div className="pb-2 text-sm text-center">
                <Link to="#" className="underline hover:text-[#ffeba7]">
                  Resend OTP
                </Link>
              </div>
              <div className="flex justify-center">
                <button className="w-60 py-2 text-xl bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all shadow-[0_0_2px_2px_rgba(255,235,167,0.3)]">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp

