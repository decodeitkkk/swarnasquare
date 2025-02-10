import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useDropdownStore from "../../store/store";
import IconButton from "@mui/material/IconButton";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Sidebar = () => {
  const location = useLocation();
  const [dropdownStates, setDropdownStates] = useState({});
  const { walletoptions, addDiv, removeDiv } = useDropdownStore(); // Zustand store for div states
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/admin/dashboard", label: "Wallet" },
    { path: "/admin/user-management", label: "Transaction History" },
    { path: "/admin/kyc", label: "Purchase History" },
    { path: "/admin/inr-transaction", label: "Bank Details" },
    { path: "/admin/gold-transaction", label: "Order Transactions" },
    { path: "/admin/order-list", label: "Customer Support" },
    { path: "/admin/custom-designs", label: "Design Request" },
    { path: "/admin-users", label: "Address Books" },
    { path: "/admin/home", label: "KYC Details" },
  ];

  const dropdownOptions = {
    Wallet: [
      { label: "Overview" },
      { label: "Deposit Funds" },
      { label: "Withdraw Funds" },
      { label: "Wallet Transactions" },
      { label: "Option 5" },
    ],
    "Transaction History": [
      { label: "View All Transactions" },
      { label: "Export Data" },
    ],
    "Purchase History": [
      { label: "Recent Purchases" },
      { label: "Download Invoice" },
    ],
    "Bank Details": [{ label: "Add Bank Details" }, { label: "Manage Banks" }],
    "Order Transactions": [
      { label: "Add Bank Details" },
      { label: "Manage Banks" },
    ],
    "Customer Support": [
      { label: "Add Bank Details" },
      { label: "Manage Banks" },
    ],
    "Design Request": [
      { label: "Add Bank Details" },
      { label: "Manage Banks" },
    ],
    "Address Books": [{ label: "Add Bank Details" }, { label: "Manage Banks" }],
    "KYC Details": [{ label: "Add Bank Details" }, { label: "Manage Banks" }],
  };

  const toggleDropdown = (label) => {
    setDropdownStates((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleAddDiv = (label) => {
    if (!walletoptions.includes(label)) {
      addDiv(label); // Add the div via Zustand store
    }
  };

  const handleRemoveDiv = (label) => {
    if (walletoptions.includes(label)) {
      removeDiv(label); // Remove the div via Zustand store
    }
  };

  return (
    <div className="rounded bg-[#43444B] text-white h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
      <div className="top-0 bg-[#43444B] z-10">
        <h2 className="pl-6 pt-3 pb-2 text-3xl font-semibold text-[#43444B] bg-[#ffeba7]">
          Dashboard
        </h2>
      </div>
      <div className="mt-4 mb-4">
        <ul>
          {navItems.map(({ path, label }) => (
            <li key={path} className="mb-3 ml-6 text-lg">
              <div
                className={`transition-all ${
                  isActive(path) ? "bg-[#1f2029]" : ""
                }`}
              >
                {/* Main Item */}
                <div
                  className={`flex items-center justify-between pl-2 transition-all h-auto ${
                    isActive(path)
                      ? "bg-[#1f2029] text-[#ffeba7] font-semibold text-xl"
                      : "text-[#ffeba7]"
                  } hover:font-semibold text-xl`}
                >
                  <Link to={path} className="flex-grow">
                    {label}
                  </Link>
                  {dropdownOptions[label] && isActive(path) && (
                    <button
                      onClick={() => toggleDropdown(label)}
                      className="text-[#ffeba7] hover:font-semibold text-xl mr-1"
                    >
                      {dropdownStates[label] ? "▲" : "▼"}
                    </button>
                  )}
                  {/* Golden Divider */}
                  {isActive(path) && (
                    <div
                      className={`ml-2 w-[4px] bg-[#ffeba7] h-[44px]`}
                      aria-hidden="true"
                    ></div>
                  )}
                </div>
                {dropdownStates[label] &&
                  dropdownOptions[label] &&
                  isActive(path) && (
                    <>
                      <hr className="border-t border-gray-700 my-2" />
                      <ul className="bg-[#1f2029]">
                        {dropdownOptions[label].map(({ label }) => (
                          <li key={label} className="flex items-center pl-4">
                            <div className="flex-grow text-[#ffeba7] text-sm">
                              {label}
                            </div>
                            <IconButton
                              onClick={() =>
                                walletoptions.includes(label)
                                  ? handleRemoveDiv(label)
                                  : handleAddDiv(label)
                              }
                              sx={{
                                color: "#ffeba7", // Golden color
                                "&:hover": {
                                  color: "#ffc107", // Hover color
                                },
                              }}
                            >
                              {walletoptions.includes(label) ? (
                                <CircleIcon fontSize="small" />
                              ) : (
                                <CircleOutlinedIcon fontSize="small" />
                              )}
                            </IconButton>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
