import React from 'react'


const services = [
  {
    title: "LOGISTICS",
    subtitle: "AND INSURANCE",
    icon: "/path-to-your-logo1.png",
  },
  { title: "TECH", subtitle: "GOLD DESIGN", icon: "/path-to-your-logo2.png" },
  { title: "24/7 SUPPORT", subtitle: "CARE", icon: "/path-to-your-logo3.png" },
  { title: "GOLD LOAN", subtitle: "FACILITY", icon: "/path-to-your-logo4.png" },
  {
    title: "COVERAGE",
    subtitle: "PINCODE COVERED",
    icon: "/path-to-your-logo5.png",
  },
  {
    title: "WALLET FOR",
    subtitle: "GOLD BALANCE",
    icon: "/path-to-your-logo6.png",
  },
  {
    title: "INSTANT BUY",
    subtitle: "GOLD BOOKING",
    icon: "/path-to-your-logo7.png",
  },
  { title: "CUSTOM", subtitle: "CUSTOM", icon: "/path-to-your-logo8.png" },
];
const Services = () => {
  return (
    <>
      <div className="text-white text-7xl mt-24 text-center font-raleway font-bold">
        WE OFFER
      </div>

      <div className="relative w-[72%] mx-auto h-[480px] text-white mt-1">
        <div className="absolute inset-0 bg-black blur"></div>

        <div className="relative grid grid-cols-4 gap-10 pt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-4"
            >
              <div className="w-15 h-15 flex justify-center items-center rounded-[12px] bg-[#CAB276] p-3">
                <img src={service.icon} alt="xxxxx" width={50} height={50} />
              </div>
              <h3 className="mt-4 text-[#FFE49F] font-raleway font-bold">
                {service.title}
              </h3>
              <p className="text-[12px] text-[#FFE49F] font-raleway font-medium">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services
