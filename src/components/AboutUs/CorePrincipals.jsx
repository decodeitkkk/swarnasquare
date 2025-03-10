import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Quality",
    description:
      "We uphold the highest standards in gold purity and material selection, ensuring every piece reflects true luxury and authenticity.",
  },
  {
    title: "Convenience",
    description:
      "Our intuitive customer dashboard provides a hassle-free experience for gold booking, order tracking, claims management, and financial transactions, making gold ownership easier than ever.",
  },
  {
    title: "Transparency",
    description:
      "We operate with absolute transparency in pricing, transactions, and gold booking, ensuring customers have real-time access to rates, secure payment options, and clear order tracking.",
  },
  {
    title: "Security",
    description:
      "Our partnerships with top-tier logistics & insurance providers guarantee safe, insured deliveries, while our Gold Wallet & Gold Loan Facility offer secure, flexible financial solutions without hidden fees or risks.",
  },
  {
    title: "Service",
    description:
      "From 24/7 customer care to seamless logistics, we are committed to providing an unmatched level of support and efficiency.",
  },
];

const CorePrincipals = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center  gap-6 py-10">
      {features.map((feature, index) => (
        <Card
          key={index}
          className={`relative w-[14rem] h-[18rem] p-2 transition-all duration-300 border border-[#ffe49f] flex flex-col items-center pt-4 
            ${
              hoveredIndex === index
                ? "shadow-[0_0_10px_5px_#ffe49f] scale-105 backdrop-opacity-50 bg-black/50 border-4  "
                : "shadow-none bg-black "
            }
             text-white`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardHeader className="text-lg font-bold font-raleway text-[#ffe49f]">
            {feature.title}
          </CardHeader>
          <CardContent className="text-xs text-gray-300 font-raleway ">
            {feature.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CorePrincipals;
