const GradientBg = () => {
  return (
    <div className="h-[580px] bg-[#CAB276] bg-opacity-30 my-[200px]">
      <div className="relative flex flex-col items-center w-full">
        <h2 className="absolute top-[-32px] text-7xl font-raleway font-bold text-white mb-9">LETS BEGIN</h2>
        <div className="flex w-full justify-center items-center gap-x-[200px] ml-[80px] mt-[100px]">
          <div className="relative w-[300px] h-[330px] border-4 border-[#FFE49F] shadow-[0px_0px_20px_rgba(255,228,159,0.4)] rounded-lg flex justify-center items-center">
            <img
              src="/path-to-your-img.jpg"
              alt="Placeholder"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-4">
            {/* Added margin to push steps away */}
            {[
              "Login / Signup",
              "Add funds to Wallet",
              "Book GOLD",
              "Select Design",
              "Settlement in GOLD",
            ].map((step, index) => (
              <div
                key={index}
                className={`flex items-center bg-[#2F2F2F] text-white w-[250px] lg:w-[500px] h-[60px] px-6 py-3 rounded-full shadow-lg text-lg transform ${
                  index === 0
                    ? "-translate-x-10"
                    : index === 1
                    ? "-translate-x-5"
                    : index === 2
                    ? "translate-x-0"
                    : index === 3
                    ? "-translate-x-5"
                    : "-translate-x-10"
                }`}
              >
                <span className="w-8 h-8 flex justify-center items-center bg-white text-black rounded-full mr-4 font-bold">
                  {index + 1}
                </span>
                <span className="font-semibold font-raleway">
                  <span className="text-[#CAB276]">{step}</span>
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
