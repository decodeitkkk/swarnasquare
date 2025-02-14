import React, {useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    phone: "",
  });

  const [timer, setTimer] = useState(0);

  const nextStep = () => {
    if (validateForm()) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }
      setCurrentStep((prev) => Math.min(prev + 1, 2));
    }
  };
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const validateForm = () => {
    const { firstName, lastName, email, phone, password } = formData;

    if (currentStep === 0 && (!firstName || !lastName)) {
      alert("Please fill out your first and last name.");
      return false;
    }

    if (
      currentStep === 1 &&
      (!email ||
        !password ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
          password
        ))
    ) {
      alert(
        "Password must be at least 6 characters long and include:\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character."
      );
      return false;
    }

    if (
      currentStep === 2 &&
      (!phone || !/^\d{10}$/.test(phone) || !otp || otp.length !== 6)
    ) {
      alert(
        "Please enter a valid email, 10-digit phone number, and valid OTP."
      );
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

    const startTimer = () => {
      setTimer(30); // Set timer to 30 seconds
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval); // Stop the timer at 0
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    };

  const handleSendOtp = () => {
    setOtpSent(true);
    startTimer();
    // Simulate sending OTP logic here
    console.log("OTP sent to:", formData.phone);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      // backend otp verification
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to the next input box if a digit is entered
      if (value && index < 5) {
        const nextInput = document.querySelector(
          `input[name="otp-${index + 1}"]`
        );
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Handle backspace to move to the previous input box
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name="otp-${index - 1}"]`
      );
      if (prevInput) prevInput.focus();
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="text-[30px] font-semibold text-white text-center pb-14 mt-12">
              Sign Up
            </h2>
            <div className="relative flex-1 mb-8">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter Your First Name"
                className="w-full h-[40px] bg-black text-gray-400 px-8 py-1 text-md rounded-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <PersonIcon
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7" }}
              />
              <span className="absolute right-2 text-red-500 text-lg">*</span>
            </div>
            <div className="relative flex-1 mb-10">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter Your Last Name"
                className="w-full h-[35px] bg-black text-gray-400 px-8 py-1 text-md rounded-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <PersonIcon
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7" }}
              />
              <span className="absolute right-2 text-red-500 text-lg">*</span>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className={`py-2 px-4 bg-[#6B1F05] text-[#ffeba7] font-bold rounded-lg ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentStep === 0}
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="py-2 px-4 bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                onClick={nextStep}
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
            <div className="flex justify-center mt-[60px] space-x-4">
              {[0, 1, 2].map((s) => {
                const isFilled = completedSteps.includes(s); // Step is completed
                const isActive = currentStep === s; // Step is the current active one

                // Determine the class for the step
                const stepClass = isFilled
                  ? isActive
                    ? "bg-[#ffeba7]" // Filled and active - dark green
                    : "bg-[#cca72e]" // Filled but not active - dark gray
                  : isActive
                  ? "bg-gray-600" // Not filled but active - dark gray
                  : "bg-gray-400"; // Not filled and not active - light gray

                return (
                  <div
                    key={s}
                    className={`w-4 h-4 rounded-full ${stepClass}`}
                  />
                );
              })}
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-[30px] font-semibold text-white text-center pb-14 mt-12">
              Sign Up
            </h2>
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full h-[40px] bg-black text-gray-400 px-8 py-1 text-md rounded-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <EmailIcon
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7", fontSize: 20 }}
              />
              <span className="absolute right-2 text-red-500 text-lg">*</span>
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create Password"
                className="w-full h-[40px] bg-black text-gray-400 px-8 py-1 text-md rounded-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <LockIcon
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7", fontSize: 18 }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <VisibilityIcon sx={{ fontSize: 18 }} />
                ) : (
                  <VisibilityOffIcon sx={{ fontSize: 18 }} />
                )}
              </button>
              <span className="absolute right-2 text-red-500 text-lg">*</span>
            </div>
            <div className="relative mb-8">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name (Optional)"
                className="w-full h-[40px] bg-black text-gray-400 px-8 py-1 text-md rounded-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <PersonIcon
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7" }}
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                className={`py-2 px-4 bg-[#6B1F05] text-[#ffeba7] font-bold rounded-lg ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentStep === 0}
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="py-2 px-4 bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                onClick={nextStep}
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
            <div className="flex justify-center mt-[60px] space-x-4">
              {[0, 1, 2].map((s) => {
                const isFilled = completedSteps.includes(s); // Step is completed
                const isActive = currentStep === s; // Step is the current active one

                // Determine the class for the step
                const stepClass = isFilled
                  ? isActive
                    ? "bg-[#ffeba7]" // Filled and active - dark green
                    : "bg-[#cca72e]" // Filled but not active - dark gray
                  : isActive
                  ? "bg-gray-600" // Not filled but active - dark gray
                  : "bg-gray-400"; // Not filled and not active - light gray

                return (
                  <div
                    key={s}
                    className={`w-4 h-4 rounded-full ${stepClass}`}
                  />
                );
              })}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-[30px] font-semibold text-white text-center pb-14">
              Sign Up
            </h2>
            <div className="relative flex items-center bg-black rounded-lg border border-transparent mb-4">
              <PhoneIcon
                className="absolute left-2 transform -translate-y-1/2"
                sx={{ color: "#ffeba7" }}
                style={{ top: "50%" }}
              />
              <span className="text-gray-400 px-3 py-1 ml-8">+91</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="flex-1 h-[40px] bg-black text-gray-400 px-4 py-1 text-md rounded-r-lg border-transparent focus:border-transparent focus:ring-0"
              />
              <span className="absolute right-2 text-red-500 text-lg">*</span>
            </div>
            <div className="text-center">
              <button
                type="button"
                className={`w-[130px] py-1 px-3 bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg mb-2 mt-2 ${
                  timer === 0 && /^\d{10}$/.test(formData.phone)
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleSendOtp}
                disabled={timer > 0 || !/^\d{10}$/.test(formData.phone)}
              >
                {otpSent
                  ? timer > 0
                    ? "Resend OTP"
                    : "Resend OTP"
                  : "Send OTP"}
              </button>

              {otpSent && timer > 0 && (
                <p className="mb-4 text-[10px] text-white">
                  You can resend the OTP in{" "}
                  <span className="font-bold">{timer}s</span>.
                </p>
              )}
            </div>
            {otpSent && (
              <>
                <div className="flex flex-col items-center gap-4 mb-4">
                  <p className="text-lg text-gray-300">Please Enter your OTP</p>
                  <div className="flex justify-center gap-2">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={otp[index] || ""}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        data-index={index}
                        className="w-12 h-12 bg-black text-center text-gray-400 text-lg rounded-lg border border-gray-600 focus:ring-2 focus:ring-[#ffeba7]"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="w-[130px] py-1 px-3 bg-[#6B1F05] text-[#ffeba7] font-bold rounded-lg"
                    onClick={handleVerifyOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              </>
            )}
            <div className="flex justify-between mt-6">
              <button
                className={`py-2 px-4 bg-[#6B1F05] text-[#ffeba7] font-bold rounded-lg ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentStep === 0}
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="py-2 px-4 bg-[#ffeba7] text-[#6B1F05] font-bold rounded-lg hover:bg-[#6B1F05] hover:text-[#ffeba7] transition-all"
                onClick={nextStep}
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
            <div className="flex justify-center mt-[60px] space-x-4">
              {[0, 1, 2].map((s) => {
                const isFilled = completedSteps.includes(s); // Step is completed
                const isActive = currentStep === s; // Step is the current active one

                // Determine the class for the step
                const stepClass = isFilled
                  ? isActive
                    ? "bg-[#ffeba7]" // Filled and active - dark green
                    : "bg-[#cca72e]" // Filled but not active - dark gray
                  : isActive
                  ? "bg-gray-600" // Not filled but active - dark gray
                  : "bg-gray-400"; // Not filled and not active - light gray

                return (
                  <div
                    key={s}
                    className={`w-4 h-4 rounded-full ${stepClass}`}
                  />
                );
              })}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center blur-sm bg-fixed"
        style={{
          backgroundImage: "url('/quote-bg.png')",
          zIndex: -1,
        }}
      />

      <div className="font-sans min-h-screen text-gray-400 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h6 className="text-lg font-semibold uppercase space-x-4 pb-3">
            <h1 className="text-2xl text-white font-bold text-center pl-1 pt-6">
              Welcome
            </h1>
            <div className="flex items-center justify-center">
              <img
                src="/SSlogo.png"
                alt="Swarna Square Logo"
                className="mx-auto my-1 w-20 h-15 block bg-blend-multiply"
              />
            </div>

            <h2 className="text-xl text-[#ffeba7] font-bold text-center mb-4">
              to Swarna Square
            </h2>
            <p className="text-gray-200 text-center mb-6">Let's get started</p>
          </h6>
        </div>
        <div
          className="w-[630px] h-[590px] bg-[#1f2029] rounded-lg shadow-lg mb-[80px] p-[50px] border-2"
          style={{
            borderColor: "#ffeba7",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
          }}
        >
          {renderFormStep()}
        </div>
      </div>
    </>
  );
};

export default Signup;


