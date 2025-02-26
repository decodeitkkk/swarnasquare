import { Link } from "react-router-dom";
import {Heading} from "./Heading";

const Preview = () => {
  return (
    <>
      <div className="flex flex-col flex-col-reverse md:flex-row  gap-0 md:h-[70vh]  md:w-[100vw] ">
        {/* Left Text Section */}
        <div className="bg-[#CAB276] p-10 flex flex-col justify-center w-full md:w-[50%] ">
          <div className=" text-black text-3xl md:text-4xl font-bold font-raleway">
            Heritage in Every Detail
          </div>{" "}
          <p className="mt-4 text-base md:text-lg font-raleway font-medium">
            We redefine the art of jewelry manufacturing with a commitment to
            precision, elegance, and an impeccable quality finish. Our heritage
            in fine jewelry craftsmanship stands as a testament to our
            dedication to excellence.
          </p>
          <Link
            to="#"
            className="mt-4 text-left text-base md:text-right  font-raleway font-semibold uppercase "
          >
            Discover our brand story-
          </Link>
        </div>
        {/* Right img Section */}
        <div className=" w-full md:w-[50%] bg-purple-500 ">
          <img
            src="./Preview2.png"
            alt="Jewelry"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="flex flex-col  md:flex-row  gap-0 md:h-[70vh]  md:w-[100vw] ">
        {/* Right img Section */}
        <div className=" w-full md:w-[50%] bg-purple-500 ">
          <img
            src="./Preview2.png"
            alt="Jewelry"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Left Text Section */}
        <div className="bg-[#CAB276] p-10 flex flex-col justify-center w-full md:w-[50%] ">
          <div className=" text-black text-3xl md:text-4xl font-bold font-raleway">
            Where Quality Shines
          </div>{" "}
          <p className="mt-4 text-base md:text-lg font-raleway font-medium">
            Each product undergoes rigorous testing and inspection to guarantee
            the highest standards are met. We strive for excellence in every
            strand of our craftsmanship, ensuring a flawless finish that our
            partners can rely on.
          </p>
          <Link
            to="#"
            className="mt-4 text-left text-base md:text-right  font-raleway font-semibold uppercase  "
          >
            Know how we do it-
          </Link>
        </div>
      </div>
    </>
  );
};

export default Preview;
