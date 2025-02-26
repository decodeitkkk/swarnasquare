import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const GoldTrendChart = () => {
  const [selectedRange, setSelectedRange] = useState("1y");

  const dataSets = {
    "7d": [10, 15, 8, 12, 14, 18, 20],
    "1m": [8, 12, 9, 15, 14, 19, 21, 24, 28, 30],
    "6m": [5, 8, 12, 10, 14, 18, 22, 26, 30, 35, 38, 42],
    "1y": [6, 9, 12, 15, 18, 22, 25, 30, 35, 40, 44, 50],
    "5y": [2, 4, 6, 10, 12, 18, 22, 28, 35, 40, 50, 60],
    "10y": [1, 3, 5, 7, 10, 15, 20, 30, 40, 50, 60, 80],
  };

  const labels = {
    "7d": ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    "1m": Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    "6m": Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    "1y": Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    "5y": Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),
    "10y": Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`),
  };

  const data = {
    labels: labels[selectedRange],
    datasets: [
      {
        label: "Gold Price Trend",
        data: dataSets[selectedRange],
        fill: true,
        borderColor: "#F1C40F",
        backgroundColor: "rgba(241, 196, 15, 0.3)",
        pointBackgroundColor: "#F1C40F",
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <div className="">
        <div className="md:max-w-3xl mx-auto bg-black p-2 md:p-6 rounded-lg shadow-md  ">
          <Line
            data={data}
            options={{
              responsive: true,
              plugins: { tooltip: { enabled: true } },
            }}
          />
        </div>
        <div className="relative bg-[#ffe49f]/80 p-4 md:p-6 lg:p-8 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items md:flex-row md:items-center md:gap-4">
            <div className="h-[90px] flex flex-col justify-center items-center gap-0.5 text-center">
              <div className="text-black text-2xl md:text-[32px] font-bold font-['Raleway']">
                Live Gold Rate
              </div>
              <div className="text-black text-lg md:text-2xl font-bold font-['Raleway'] leading-[33.60px]">
                INR 7,322/gm 
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="relative bg-[#1f9d14]/80 rounded-[5px] px-3.5 py-[7px] flex items-center gap-2">
              <div className="text-black text-lg md:text-[32px] font-bold font-['Roboto']">
                5.50%
              </div>
              <div>^</div>
            </div>
            <div className="text-black text-center text-sm md:text-xl font-normal font-['Roboto'] mt-2 md:mt-0">
              Growth vs previous 30 days
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <Button className="bg-black text-white" variant="default">
              <Link to="/signup" >
              Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldTrendChart;
