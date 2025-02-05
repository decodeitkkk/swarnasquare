import React from "react";
import Header from "../Common/Nav";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
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
        <Header isFixed={false} />
      </div>

      {/* Content Area */}
      <div className="bg-[#1f2029] rounded-md mt-[200px] m-[150px]">
        <div
          className="flex border-2 rounded-md"
          style={{
            borderColor: "#ffeba7",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
          }}
        >
          {/* Sidebar */}
          <div className="sticky w-[260px]">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
