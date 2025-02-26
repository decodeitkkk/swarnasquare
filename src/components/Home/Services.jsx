import React from "react";

const services = [
  {
    title: "LOGISTICS",
    subtitle: "AND INSURANCE",
    icon: "/Logistics.png",
  },
  { title: "TECH", subtitle: "GOLD DESIGN", icon: "/Logistics.png" },
  { title: "24/7 SUPPORT", subtitle: "CARE", icon: "/Logistics.png" },
  { title: "GOLD LOAN", subtitle: "FACILITY", icon: "/Logistics.png" },
  {
    title: "COVERAGE",
    subtitle: "PINCODE COVERED",
    icon: "/Logistics.png",
  },
  {
    title: "WALLET FOR",
    subtitle: "GOLD BALANCE",
    icon: "/Logistics.png",
  },
  {
    title: "INSTANT BUY",
    subtitle: "GOLD BOOKING",
    icon: "/Logistics.png",
  },
  { title: "CUSTOM", subtitle: "CUSTOM", icon: "/Logistics.png" },
];
const Services = () => {
  return (
    <>
      <div className=" w-[80%] md:h-[70vh]  mx-auto  text-white m-20 bg-black/50 backdrop-blur-xl rounded-xl   ">
        {/* <div className=" bg-black blur"></div> */}

        <div className=" w-[90%] h-[90%] mx-auto my-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 py-10 px-4  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-4"
            >
              <div className=" w-12 h-12  md:w-20 md:h-20 flex justify-center items-center rounded-2xl bg-[#CAB276] ">
                <img src={service.icon} alt="xxxxx" width={100} height={100} />
              </div>

              <h3 className="mt-4 text-sm md:text-xl text-[#FFE49F] font-raleway font-bold">
                {service.title}
              </h3>
              <p className="text-[10px] text-[#FFE49F] font-raleway font-light  ">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
