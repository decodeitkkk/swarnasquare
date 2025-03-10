import React from "react";

const AboutTeam = () => {
  return (
    <div className="flex items-center justify-between w-full min-h-[50vh] bg-black px-10">
      {/* Left Side - Text */}
      <div className="w-1/2 flex justify-center">
        <h2 className="text-4xl font-semibold text-[#d4af63]">Skilled artisans</h2>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="/about_team_1.png"
          alt="Skilled Artisans"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutTeam;
