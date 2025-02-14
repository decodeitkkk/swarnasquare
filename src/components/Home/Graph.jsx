import React, { useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

// Register necessary Chart.js components
ChartJS.register(...registerables);

// Colors for different datasets
const goldColors = {
  main: "#FFD700",
  background: "rgba(0,0,0,0.7)",
  axisColor: "#DAA520",
};
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300"];
// Sample data with consistent time format
const sampleData = [
  {
    name: "GOLD25FEBFUT",
    color: colors[0],
    data: [
      { x: "2025-02-01T03:45:00.000Z", c: 81900 },
      { x: "2025-02-01T03:48:00.000Z", c: 81900 },
      { x: "2025-02-01T03:51:00.000Z", c: 81900 },
      { x: "2025-02-01T03:54:00.000Z", c: 81900 },
      { x: "2025-02-01T03:57:00.000Z", c: 81900 },
    ],
  },
  {
    name: "GOLDM25FEBFUT",
    color: colors[1],
    data: [
      { x: "2025-02-01T03:45:00.000Z", c: 81838 },
      { x: "2025-02-01T03:48:00.000Z", c: 81838 },
      { x: "2025-02-01T03:51:00.000Z", c: 81871 },
      { x: "2025-02-01T03:54:00.000Z", c: 81871 },
      { x: "2025-02-01T03:57:00.000Z", c: 81871 },
    ],
  },
  {
    name: "GOLDGUINEA25FEBFUT",
    color: colors[2],
    data: [
      { x: "2025-02-01T03:45:00.000Z", c: 65779 },
      { x: "2025-02-01T03:48:00.000Z", c: 65797 },
      { x: "2025-02-01T03:51:00.000Z", c: 65820 },
      { x: "2025-02-01T03:54:00.000Z", c: 65849 },
      { x: "2025-02-01T03:57:00.000Z", c: 65848 },
    ],
  },
  {
    name: "GOLDPETAL25FEBFUT",
    color: colors[3],
    data: [
      { x: "2025-02-01T03:45:00.000Z", c: 8100 },
      { x: "2025-02-01T03:48:00.000Z", c: 8104 },
      { x: "2025-02-01T03:51:00.000Z", c: 8105 },
      { x: "2025-02-01T03:54:00.000Z", c: 8107 },
      { x: "2025-02-01T03:57:00.000Z", c: 8110 },
    ],
  },
];

const Graph = () => {
  const [selectedOption, setSelectedOption] = useState("GOLD25FEBFUT");

  // Find selected dataset
  const selectedDataset =
    selectedOption === "ALL"
      ? sampleData
      : [sampleData.find((d) => d.name === selectedOption)];

  // Prepare chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: "x",
      yAxisKey: "c",
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
          displayFormats: {
            minute: "HH:mm",
          },
        },
        title: {
          display: true,
          text: "Time",
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          color: "rgb(255, 255, 255)",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          color: "rgb(255, 255, 255)",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: goldColors.axisColor,
        },
      },
    },
  };

  // Prepare chart data
  const chartData = {
    datasets: selectedDataset.map((dataset) => ({
      label: dataset.name,
      data: dataset.data,
      borderColor: goldColors.main,
      backgroundColor: goldColors.main,
      fill: false,
      tension: 0.1,
    })),
  };

  return (
    <div className="relative my-[100px] h-[600px] flex flex-col gap-4 items-center justify-center backdrop-blur-xl bg-[rgba(255,228,159,0.2)] p-6 rounded-lg">
      <div className="text-white text-4xl font-bold relative z-10 mb-4">
        GOLD PRICE
      </div>

      <select
        className="px-4 py-2 bg-gray-800 backdrop-blur text-white rounded-md mb-4"
        onChange={(e) => setSelectedOption(e.target.value)}
        value={selectedOption}
      >
        {[...sampleData.map((dataset) => dataset.name), "ALL"].map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      {/* Chart Container */}
      <div
        className="w-[80%] md:w-[80%] h-[70%] relative z-10 px-[128px] py-10 rounded-lg "
        style={{
          backgroundColor: goldColors.background,
          backdropFilter: "blur(10px)",
        }}
      >
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graph;