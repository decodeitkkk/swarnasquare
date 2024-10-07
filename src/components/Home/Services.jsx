import services from "../../assets/Services/Services.png";
import tick from "../../assets/Services/tick.png";

const Services = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center gap-10 mx-auto my-16 md:w-[80%]">
      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center">
        <img src={services} className="h-[300px] md:h-[400px] object-cover" alt="Services" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col md:w-[50%] w-full md:max-w-[40%] max-w-full px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-medium text-center md:text-left">Know about our Services</h1>
        <p className="text-sm md:text-base text-[#666666] mt-4 text-center md:text-left">
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        {/* List Section */}
        <div className="flex flex-row items-center justify-center md:justify-start mt-6 gap-5">
          <div className="flex flex-col gap-3">
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
          </div>
          
          <div className="flex flex-col gap-3 md:mt-0">
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
            <li className="flex items-center gap-3 bg-[#F5F4F4] w-[140px] md:w-[150px] h-[40px] p-2">
              <img src={tick} alt="tick" className="w-4 h-4" />
              <p className="text-sm md:text-lg">Korem ipsum</p>
            </li>
          </div>
        </div>

        {/* Button */}
        <button className="self-center md:self-start px-6 py-2 bg-amber-600 mt-8 text-white">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Services;
