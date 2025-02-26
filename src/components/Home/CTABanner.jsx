import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <>
      <div className="bg-yellow-300  flex flex-col md:flex-row md:justify-center  items-center px-5 py-10 my-20 gap-10 ">
        <div className="font-im text-4xl md:text-5xl text-center ">
          For Expert Advice and Industry insights{" "}
        </div>
        <div>
          <Button className="" size="lg">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CTABanner;
