import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDropdownStore from "../../../store/store";
import IconButton from "@mui/material/IconButton";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Sidebar = () => {
  const { walletoptions, addDiv, removeDiv } = useDropdownStore(); // Zustand store for div states
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const [dropdownStates, setDropdownStates] = useState({});

  const navItems = [
    { label: "Wallet" },
    { label: "Transaction History" },
    { label: "Purchase History" },
    { label: "Bank Details" },
    { label: "Order Transactions" },
    { label: "Customer Support" },
    { label: "Design Request" },
    { label: "Address Books" },
    { label: "KYC Details" },
  ];

  const dropdownOptions = {
    "Wallet": [
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
    "Order Transactions": [{ label: "Option1" }, { label: "Option2" }],
    "Customer Support": [{ label: "Option3" }, { label: "Option4" }],
    "Design Request": [{ label: "Option6" }, { label: "Option7" }],
    "Address Books": [{ label: "Option8" }, { label: "Option9" }],
    "KYC Details": [{ label: "Option10" }, { label: "Option11" }],
  };

  // ✅ Select item and open dropdown (Only One Dropdown at a Time)
  const handleSelectItem = (label) => {
    setSelectedItem(label); // Update selected item
    setDropdownStates({ [label]: !dropdownStates[label] }); // Toggle dropdown
  };

const handleAddDiv = (label) => {
  if (!walletoptions.includes(label)) {
    addDiv(selectedItem, label); // Pass both category and label
  }
};

const handleRemoveDiv = (label) => {
  if (walletoptions.includes(label)) {
    removeDiv(selectedItem, label); // Pass both category and label
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
          {navItems.map(({ label }) => (
            <li key={label} className="mb-3 ml-6 text-lg">
              <div
                className={`transition-all ${
                  selectedItem === label ? "bg-[#1f2029]" : ""
                }`}
              >
                {/* Main Item */}
                <div
                  className={`flex items-center justify-between pl-2 transition-all h-auto cursor-pointer ${
                    selectedItem === label
                      ? "bg-[#1f2029] text-[#ffeba7] font-semibold text-xl"
                      : "text-[#ffeba7]"
                  } hover:font-semibold text-xl`}
                  onClick={() => handleSelectItem(label)}
                >
                  <Link to="/admin/wallet" className="flex-grow">
                    {label}
                  </Link>

                  {/* Dropdown Toggle */}
                  {dropdownOptions[label] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectItem(label);
                      }}
                      className="text-[#ffeba7] hover:font-semibold text-xl mr-1"
                    >
                      {dropdownStates[label] ? "▲" : "▼"}
                    </button>
                  )}

                  {/* Golden Divider for Active Item */}
                  {selectedItem === label && (
                    <div
                      className={`ml-2 w-[4px] bg-[#ffeba7] h-[44px]`}
                      aria-hidden="true"
                    ></div>
                  )}
                </div>

                {/* Dropdown Content */}
                {dropdownStates[label] && dropdownOptions[label] && (
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
