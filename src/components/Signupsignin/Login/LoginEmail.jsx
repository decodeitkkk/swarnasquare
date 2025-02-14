import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Loginemail = () => {
  return (
    <div>
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
          <div className="w-full h-[350px] bg-[#1f2029] rounded-lg shadow-lg flex items-center justify-center pt-7">
            <div className="space-y-6 px-8">
              {/* Email Address Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <EmailIcon
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                  sx={{ color: "#ffeba7" }}
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full bg-black text-gray-400 px-12 py-3 rounded-lg border-transparent focus:border-transparent focus:ring-0"
                />
                <LockIcon
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                  sx={{ color: "#ffeba7" }}
                />
              </div>
              {/* Submit Button */}
              <button className="w-full py-2 text-xl bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all shadow-[0_0_2px_2px_rgba(255,235,167,0.3)]">
                Submit
              </button>
              <div className="pb-6 text-sm text-center">
                <Link to="#" className=" underline marker:hover:text-[#ffeba7]">
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginemail
