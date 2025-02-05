import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import useDropdownStore from "../../../store/store";
import { X, LayoutGrid, List, GripVertical } from "lucide-react";

const Wallet = () => {
  const { walletoptions, removeDiv } = useDropdownStore();
  const [viewMode, setViewMode] = useState("grid");
  const [gridLayout, setGridLayout] = useState([]);
  const [lastGridLayout, setLastGridLayout] = useState([]);

  // Section headers mapping remains the same
  const sectionHeaders = {
    Overview: "Wallet",
    "Deposit Funds": "Wallet",
    "Withdraw Funds": "Wallet",
    "Wallet Transactions": "Wallet",
    "Option 5": "Wallet",
    "View All Transactions": "Transaction History",
    "Export Data": "Transaction History",
    "Recent Purchases": "Purchase History",
    "Download Invoice": "Purchase History",
    "Add Bank Details": "Bank Details",
    "Manage Banks": "Bank Details",
    Option1: "Order Transactions",
    Option2: "Order Transactions",
    Option3: "Customer Support",
    Option4: "Customer Support",
    Option6: "Design Request",
    Option7: "Design Request",
    Option8: "Address Books",
    Option9: "Address Books",
    Option10: "KYC Details",
    Option11: "KYC Details",
  };

  const generateLayout = (items, isGrid) => {
    let layout = [{ i: "Graph", x: 0, y: 0, w: 5, h: 2, static: true }];

    // Group items by their sections
    const sectionGroups = items.reduce((acc, item) => {
      const section = sectionHeaders[item] || "Other";
      if (!acc[section]) acc[section] = [];
      acc[section].push(item);
      return acc;
    }, {});

    let currentY = 2; // Start after graph

    // Add each section with its items
    Object.entries(sectionGroups).forEach(([section, sectionItems]) => {
      // Add section header
      layout.push({
        i: `header-${section}`,
        x: 0,
        y: currentY,
        w: 5,
        h: 1,
        static: true,
      });
      currentY += 0.2; // Reduced spacing after header

      if (isGrid) {
        // Grid view layout
        sectionItems.forEach((item, index) => {
          const existingItem = lastGridLayout.find((li) => li.i === item);

          if (existingItem && !existingItem.i.startsWith("header-")) {
            layout.push({
              ...existingItem,
              y: currentY + Math.floor(index / 5),
              static: false,
            });
          } else {
            const isDepositFunds = item === "Deposit Funds";
            layout.push({
              i: item,
              x: index % 5,
              y: currentY + Math.floor(index / 5),
              w: isDepositFunds ? 2 : 1,
              h: isDepositFunds ? 2 : 1,
              static: false,
            });
          }
        });

        const sectionHeight =
          Math.max(
            ...layout
              .filter((item) => sectionHeaders[item.i] === section)
              .map((item) => item.y + item.h)
          ) - currentY;
        currentY += Math.max(sectionHeight, Math.ceil(sectionItems.length / 5));
      } else {
        // List view layout
        sectionItems.forEach((item, index) => {
          layout.push({
            i: item,
            x: 0,
            y: currentY + index,
            w: 5,
            h: 1,
            static: false,
          });
        });
        currentY += sectionItems.length;
      }

      currentY += 0.2; // Reduced spacing between sections
    });

    return layout;
  };

  useEffect(() => {
    const newLayout = generateLayout(walletoptions, viewMode === "grid");

    setGridLayout((prevLayout) => {
      if (JSON.stringify(prevLayout) !== JSON.stringify(newLayout)) {
        return newLayout;
      }
      return prevLayout;
    });

    if (viewMode === "grid") {
      setLastGridLayout((prevLayout) => {
        if (JSON.stringify(prevLayout) !== JSON.stringify(newLayout)) {
          return newLayout;
        }
        return prevLayout;
      });
    }
  }, [walletoptions, viewMode]);

  const adjustLayoutForResize = (layout) => {
    let currentY = 2;
    const sections = [...new Set(Object.values(sectionHeaders))];
    const adjustedLayout = [...layout];

    const sectionItems = {};
    sections.forEach((section) => {
      sectionItems[section] = adjustedLayout.filter(
        (item) =>
          !item.i.startsWith("header-") && sectionHeaders[item.i] === section
      );
    });

    sections.forEach((section) => {
      const headerIndex = adjustedLayout.findIndex(
        (item) => item.i === `header-${section}`
      );
      if (headerIndex !== -1) {
        adjustedLayout[headerIndex] = {
          ...adjustedLayout[headerIndex],
          y: currentY,
        };
        currentY += 0.2; // Reduced spacing after header
      }

      const items = sectionItems[section] || [];
      if (items.length > 0) {
        const sectionTop = currentY;
        items.forEach((item) => {
          const itemIndex = adjustedLayout.findIndex((i) => i.i === item.i);
          if (itemIndex !== -1) {
            const newY = sectionTop + (item.y - Math.floor(item.y));
            adjustedLayout[itemIndex] = {
              ...item,
              y: newY,
            };
          }
        });

        const sectionBottom = Math.max(...items.map((item) => item.y + item.h));
        currentY = sectionBottom + 0.2; // Reduced spacing after section
      }
    });

    return adjustedLayout;
  };

  const onLayoutChange = (newLayout) => {
    const hasChanges = newLayout.some((item, index) => {
      const oldItem = gridLayout[index];
      return (
        oldItem &&
        (oldItem.h !== item.h || oldItem.y !== item.y || oldItem.x !== item.x)
      );
    });

    if (hasChanges) {
      const adjustedLayout = adjustLayoutForResize(newLayout);
      setGridLayout(adjustedLayout);
      if (viewMode === "grid") {
        setLastGridLayout(adjustedLayout);
      }
    }
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleRemoveBox = (label) => {
    const category = sectionHeaders[label];
    if (category) {
      removeDiv(category, label);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-end gap-2 p-2 mb-3 mr-3 ml-auto rounded-lg bg-[#43444B] w-[90px]">
        <button
          onClick={() => toggleViewMode("grid")}
          className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-100" : ""}`}
        >
          <LayoutGrid size={20} />
        </button>
        <button
          onClick={() => toggleViewMode("list")}
          className={`p-2 rounded ${viewMode === "list" ? "bg-gray-100" : ""}`}
        >
          <List size={20} />
        </button>
      </div>
      <GridLayout
        className="layout"
        layout={gridLayout}
        cols={5}
        rowHeight={80}
        width={900}
        isResizable={true}
        isDraggable={true}
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={onLayoutChange}
      >
        {gridLayout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            className={`relative p-6 text-center rounded-lg shadow-md
              ${
                item.i.startsWith("header-")
                  ? "text-[#ffeba7] font-semibold text-xl border-none flex items-center justify-center w-full"
                  : "bg-white border-2 border-gray-200"
              }`}
          >
            {item.i === "Graph" ? (
              <h3 className="text-lg font-semibold text-gray-700">Graph</h3>
            ) : item.i.startsWith("header-") ? (
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-full h-[1px] border-t-2 border-dotted border-gray-400 top-[60%]"></div>
                <span className="bg-[#1f2029] z-10 -mt-[8px] leading-tight">
                  {item.i.replace("header-", "")}
                </span>
              </div>
            ) : (
              <>
                <div className="cursor-grab absolute top-1 left-1 p-1 bg-gray-200 rounded-lg flex items-center">
                  <GripVertical size={18} className="text-gray-600" />
                </div>
                <button
                  onClick={() => handleRemoveBox(item.i)}
                  className="absolute top-1 right-1 p-1 rounded-full bg-gray-800 transition-opacity duration-200 hover:bg-red-900"
                  draggable="false"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <X size={16} className="text-white" />
                </button>
                <span className="flex-1 text-gray-700">{item.i}</span>
              </>
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Wallet;
