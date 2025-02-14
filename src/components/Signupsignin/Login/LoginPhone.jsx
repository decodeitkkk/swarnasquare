import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const LoginPhone = () => {
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
          <div className="w-full h-[400px] bg-[#1f2029] rounded-lg shadow-lg flex items-center justify-center">
            <div className="flex-col items-center justify-center space-y-6 px-8">
              {/* Phone Number Login */}
              <h4 className="text-l font-semibold font-sans text-white text-center mt-7">
                Let's get started! Enter your mobile number
              </h4>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <PhoneIcon
                  className="absolute top-1/2 left-4 -translate-y-1/2"
                  sx={{ color: "#ffeba7" }}
                />
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button className="w-60 py-2 text-xl bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all shadow-[0_0_2px_2px_rgba(255,235,167,0.3)]">
                  <Link to="/loginphone/otp">Get OTP</Link>
                </button>
              </div>
              <div className="pb-6 text-sm text-center">
                <Link to="#" className="hover:text-[#ffeba7]">
                  Trouble Sign in?
                </Link>
              </div>
              {/* Social Login Options */}
              <div className="flex flex-col items-center w-full space-y-4">
                <div className="relative w-full flex items-center">
                  <hr className="flex-grow border-t border-gray-600" />
                  <span className="px-3 text-gray-400 text-sm">or</span>
                  <hr className="flex-grow border-t border-gray-600" />
                </div>
                <div className="flex justify-center space-x-4 pb-7">
                  <Link to="#"
                    className="p-3 text-black bg-[#ffeba7] rounded-full hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                  >
                    <GoogleIcon sx={{ fontSize: 32 }} />
                  </Link>
                  <Link to="#"
                    className="p-3 text-black bg-[#ffeba7] rounded-full hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                  >
                    <AppleIcon sx={{ fontSize: 30 }} />
                  </Link>
                  <Link
                    to="/loginemail"
                    className="p-3 text-black bg-[#ffeba7] rounded-full hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                  >
                    <EmailIcon sx={{ fontSize: 30 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPhone;
