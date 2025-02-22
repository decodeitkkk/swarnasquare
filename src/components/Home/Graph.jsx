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
            <div className="h-screen my-20 ">
                <div className="md:text-6xl text-center my-5 font-extrabold bg-gradient-to-b from-gray-100 to-yellow-300 bg-clip-text text-transparent uppercase">
                    Gold Price
                </div>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md  ">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                            <span className="text-yellow-500 mr-2">📊</span>{" "}
                            Gold Trend Analysis
                        </h2>
                        <div className="flex space-x-2">
                            {["7d", "1m", "6m", "1y", "5y", "10y"].map(
                                (range) => (
                                    <button
                                        key={range}
                                        onClick={() => setSelectedRange(range)}
                                        className={`px-3 py-1 rounded-full text-sm ${
                                            selectedRange === range
                                                ? "bg-yellow-500 text-white"
                                                : "bg-gray-200 text-gray-700"
                                        } transition-all duration-300`}
                                    >
                                        {range.toUpperCase()}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <Line
                        data={data}
                        options={{
                            responsive: true,
                            plugins: { tooltip: { enabled: true } },
                        }}
                    />
                </div>
                <div className="flex justify-center w-full  my-10  ">
                    <button
                        className="rounded-md bg-yellow-600 py-2 px-4 border border-transparent text-center text-sm text-slate-100 transition-all shadow-md hover:shadow-lg focus:bg-yellow-700 focus:shadow-none active:bg-yellow-700 hover:bg-yellow-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 "
                        type="button"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default GoldTrendChart;
