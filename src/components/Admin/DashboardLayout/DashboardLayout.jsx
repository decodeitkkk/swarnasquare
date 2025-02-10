import React from "react";
import Header from "../../Common/Nav";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center blur-lg bg-fixed"
        style={{
          backgroundImage: "url('/quote-bg.png')",
          zIndex: -1,
        }}
      />

      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* Content Area */}
      <div className="min-h-screen">
        <div
          className="bg-[#1f2029] rounded-md mx-[150px] my-[150px] transition-all duration-300"
          style={{
            minHeight: "calc(100vh - 180px)",
          }}
        >
          <div
            className="flex border-2 rounded-md h-full"
            style={{
              borderColor: "#ffeba7",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
            }}
          >
            {/* Sidebar */}
            <div className="w-[260px] sticky top-[80px]">
              {/* Adjust top value to match header height */}
              <div className="h-[calc(100vh-180px)]">
                {/* Adjust 80px to match header height */}
                <Sidebar />
              </div>
            </div>

            <main className="flex-1 overflow-y-auto no-scrollbar sticky top-[80px]">
              <div className="p-6">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
