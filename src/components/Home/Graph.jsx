// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
//   ComposedChart,
//   Bar,
// } from "recharts";

// // Colors for different datasets
// const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300"];

// // Sample data
// const sampleData = [
//   {
//     name: "GOLD25FEBFUT",
//     color: colors[0],
//     data: [
//       { time: "09:15", open: 81900, high: 82000, low: 81850, close: 81950 },
//       { time: "09:18", open: 81950, high: 82100, low: 81900, close: 82050 },
//       { time: "09:21", open: 82050, high: 82200, low: 82000, close: 82150 },
//       { time: "09:24", open: 82150, high: 82300, low: 82100, close: 82250 },
//       { time: "09:27", open: 82250, high: 82400, low: 82200, close: 82350 },
//     ],
//   },
//   {
//     name: "GOLDM25FEBFUT",
//     color: colors[1],
//     data: [
//       { time: "09:15", open: 81752, high: 81838, low: 81700, close: 81838 },
//       { time: "09:18", open: 81838, high: 81900, low: 81800, close: 81880 },
//       { time: "09:21", open: 81880, high: 81950, low: 81850, close: 81920 },
//       { time: "09:24", open: 81920, high: 82000, low: 81880, close: 81960 },
//       { time: "09:27", open: 81960, high: 82050, low: 81900, close: 82000 },
//     ],
//   },
//   {
//     name: "GOLDGUINEA25FEBFUT",
//     color: colors[2],
//     data: [
//       { time: "09:15", open: 65764, high: 65797, low: 65750, close: 65779 },
//       { time: "09:18", open: 65779, high: 65800, low: 65760, close: 65790 },
//       { time: "09:21", open: 65790, high: 65820, low: 65780, close: 65810 },
//       { time: "09:24", open: 65810, high: 65850, low: 65800, close: 65830 },
//       { time: "09:27", open: 65830, high: 65870, low: 65820, close: 65860 },
//     ],
//   },
//   {
//     name: "GOLDPETAL25FEBFUT",
//     color: colors[3],
//     data: [
//       { time: "09:15", open: 8106, high: 8110, low: 8100, close: 8108 },
//       { time: "09:18", open: 8108, high: 8112, low: 8102, close: 8110 },
//       { time: "09:21", open: 8110, high: 8115, low: 8105, close: 8113 },
//       { time: "09:24", open: 8113, high: 8118, low: 8110, close: 8116 },
//       { time: "09:27", open: 8116, high: 8120, low: 8113, close: 8118 },
//     ],
//   },
// ];

// // Merge data for "All Graphs" view
// const mergeData = (datasets) => {
//   const timeMap = {};

//   // Collect unique timestamps and initialize object
//   datasets.forEach((dataset) => {
//     dataset.data.forEach(({ time, close }) => {
//       if (!timeMap[time]) {
//         timeMap[time] = { time };
//       }
//       timeMap[time][dataset.name] = close; // Assign dataset close price
//     });
//   });

//   return Object.values(timeMap).sort((a, b) => a.time.localeCompare(b.time));
// };

// const Graph = () => {
//   const [chartType, setChartType] = useState("candlestick");
//   const [selectedOption, setSelectedOption] = useState("GOLD25FEBFUT");

//   // Get selected dataset or merged dataset for "All Graphs"
//   const selectedData =
//     selectedOption === "All Graphs"
//       ? mergeData(sampleData)
//       : sampleData.find((d) => d.name === selectedOption)?.data;

//   return (
//     <div className="relative my-[100px] h-[700px] flex flex-col gap-4 items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.8)] bg-[rgba(255,228,159,0.2)] p-6 rounded-lg">
//       <div className="text-white text-4xl font-bold relative z-10 mb-4">
//         GOLD PRICE
//       </div>

//       {/* Dropdown to Select Dataset */}
//       <select
//         className="px-4 py-2 bg-gray-800 text-white rounded-md mb-4"
//         onChange={(e) => setSelectedOption(e.target.value)}
//       >
//         {sampleData.map((dataset) => (
//           <option key={dataset.name} value={dataset.name}>
//             {dataset.name}
//           </option>
//         ))}
//         <option value="All Graphs">All Graphs</option>
//       </select>

//       {/* Toggle Buttons */}
//       <div className="flex gap-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded-md ${
//             chartType === "candlestick"
//               ? "bg-yellow-500 text-black"
//               : "bg-gray-700 text-white"
//           }`}
//           onClick={() => setChartType("candlestick")}
//         >
//           Candlestick Chart
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md ${
//             chartType === "line"
//               ? "bg-yellow-500 text-black"
//               : "bg-gray-700 text-white"
//           }`}
//           onClick={() => setChartType("line")}
//         >
//           Line Chart
//         </button>
//       </div>

//       {/* Chart Container */}
//       <div className="bg-white w-[80%] md:w-[60%] h-[60%] relative z-10 p-4 shadow-md rounded-lg">
//         <ResponsiveContainer width="100%" height={350}>
//           {chartType === "candlestick" && selectedOption !== "All Graphs" ? (
//             <ComposedChart data={selectedData}>
//               <XAxis dataKey="time" />
//               <YAxis domain={["auto", "auto"]} />
//               <Tooltip />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Legend />
//               {/* Simulated Candlestick Bars */}
//               <Bar dataKey="low" fill="red" barSize={5} />
//               <Bar dataKey="high" fill="green" barSize={5} />
//             </ComposedChart>
//           ) : (
//             <LineChart data={selectedData}>
//               <XAxis dataKey="time" />
//               <YAxis domain={["auto", "auto"]} />
//               <Tooltip />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Legend />
//               {selectedOption === "All Graphs" ? (
//                 sampleData.map((dataset) => (
//                   <Line
//                     key={dataset.name}
//                     type="monotone"
//                     dataKey={dataset.name}
//                     stroke={dataset.color}
//                     strokeWidth={2}
//                     dot={false}
//                     name={dataset.name}
//                   />
//                 ))
//               ) : (
//                 <Line
//                   type="monotone"
//                   dataKey="close"
//                   stroke="gold"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               )}
//             </LineChart>
//           )}
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Graph;


// import React, { useState } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Chart } from "react-chartjs-2";
// import "chartjs-adapter-date-fns";

// // Register necessary Chart.js components
// ChartJS.register(...registerables);

// // Colors for different datasets
// const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300"];

// // Sample data with consistent time format
// const sampleData = [
//   {
//     name: "GOLD25FEBFUT",
//     color: colors[0],
//     data: [
//       { x: "2025-02-01T03:45:00.000Z", c: 81900 },
//       { x: "2025-02-01T03:48:00.000Z", c: 81900 },
//       { x: "2025-02-01T03:51:00.000Z", c: 81900 },
//       { x: "2025-02-01T03:54:00.000Z", c: 81900 },
//       { x: "2025-02-01T03:57:00.000Z", c: 81900 },
//     ],
//   },
//   {
//     name: "GOLDM25FEBFUT",
//     color: colors[1],
//     data: [
//       { x: "2025-02-01T03:45:00.000Z", c: 81838 },
//       { x: "2025-02-01T03:48:00.000Z", c: 81838 },
//       { x: "2025-02-01T03:51:00.000Z", c: 81871 },
//       { x: "2025-02-01T03:54:00.000Z", c: 81871 },
//       { x: "2025-02-01T03:57:00.000Z", c: 81871 },
//     ],
//   },
//   {
//     name: "GOLDGUINEA25FEBFUT",
//     color: colors[2],
//     data: [
//       { x: "2025-02-01T03:45:00.000Z", c: 65779 },
//       { x: "2025-02-01T03:48:00.000Z", c: 65797 },
//       { x: "2025-02-01T03:51:00.000Z", c: 65820 },
//       { x: "2025-02-01T03:54:00.000Z", c: 65849 },
//       { x: "2025-02-01T03:57:00.000Z", c: 65848 },
//     ],
//   },
//   {
//     name: "GOLDPETAL25FEBFUT",
//     color: colors[3],
//     data: [
//       { x: "2025-02-01T03:45:00.000Z", c: 8100 },
//       { x: "2025-02-01T03:48:00.000Z", c: 8104 },
//       { x: "2025-02-01T03:51:00.000Z", c: 8105 },
//       { x: "2025-02-01T03:54:00.000Z", c: 8107 },
//       { x: "2025-02-01T03:57:00.000Z", c: 8110 },
//     ],
//   },
// ];

// const Graph = () => {
//   const [selectedOption, setSelectedOption] = useState("GOLD25FEBFUT");

//   // Find selected dataset
//   const selectedDataset =
//     selectedOption === "ALL"
//       ? sampleData
//       : [sampleData.find((d) => d.name === selectedOption)];

//   // Prepare chart options
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     parsing: {
//       xAxisKey: "x",
//       yAxisKey: "c",
//     },
//     scales: {
//       x: {
//         type: "time",
//         time: {
//           unit: "minute",
//           displayFormats: {
//             minute: "HH:mm",
//           },
//         },
//         title: {
//           display: true,
//           text: "Time",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Price",
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//   };

//   // Prepare chart data
//   const chartData = {
//     datasets: selectedDataset.map((dataset) => ({
//       label: dataset.name,
//       data: dataset.data,
//       borderColor: dataset.color,
//       backgroundColor: dataset.color,
//       fill: false,
//       tension: 0.1,
//     })),
//   };

//   return (
//     <div className="relative my-[100px] h-[700px] flex flex-col gap-4 items-center justify-center backdrop-blur-xl bg-[rgba(255,228,159,0.2)] p-6 rounded-lg">
//       <div className="text-white text-4xl font-bold relative z-10 mb-4">
//         GOLD PRICE
//       </div>

//       {/* Dropdown to Select Dataset */}
//       <select
//         className="px-4 py-2 bg-gray-800 text-white rounded-md mb-4"
//         onChange={(e) => setSelectedOption(e.target.value)}
//         value={selectedOption}
//       >
//         {[...sampleData.map((dataset) => dataset.name), "ALL"].map((name) => (
//           <option key={name} value={name}>
//             {name}
//           </option>
//         ))}
//       </select>
//       <div className="bg-white w-[80%] md:w-[60%] h-[60%] relative z-10 p-4 shadow-md rounded-lg">
//         <Chart type="line" data={chartData} options={chartOptions} />
//       </div>
//       <div></div>

//       {/* Chart Container */}
//     </div>
//   );
// };

// export default Graph;




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