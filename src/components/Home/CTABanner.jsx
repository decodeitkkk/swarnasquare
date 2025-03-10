import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <>
      <div className="h-[55vh] flex items-center w-full " >
        <div className="bg-[#cab276] w-full flex flex-col md:flex-row md:justify-center  items-center px-5 py-10  gap-10 ">
          <div className="font-im text-4xl md:text-5xl text-center ">
            For Expert Advice and Industry insights{" "}
          </div>
          <div>
            <Button className=" bg-gradient-to-r to-[#50291F] from-[#291510] border-[#FFE49F] " size="lg">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTABanner;
