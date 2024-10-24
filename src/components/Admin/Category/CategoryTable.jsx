import { useState } from "react";
import Sidebar from "../Layout/Sidebar";

// Demo data for categories and their corresponding variables
const demoCategories = [
  {
    id: 1,
    subCategoryName: "Chains",
    productType: "Chains",
    productCategories: [
      {
        productCategoryName: "Box Chain",
        variables: {
          purity: "22",
          diameter: "0.5 inches",
          lengthWeight: "20 inches",
          loops: "5 loops",
          hooks: "Gold hooks",
          hallmark: "Gold",
          polish: true,
          customCutting: "Custom Cut 1",
          customDesign: null,
          cut: "Diamond Cut",
          die: "Gold Die",
          thickness: "1mm",
          locks: true,
          clarity: "VVS",
          carat: "1.5",
          size: "Medium"
        }
      }
    ]
  },
  {
    id: 2,
    subCategoryName: "Beads",
    productType: "Beads",
    productCategories: [
      {
        productCategoryName: "Rope Chain",
        variables: {
          purity: "20",
          diameter: "1 inch",
          lengthWeight: "10 inches",
          loops: "3 loops",
          hooks: "Silver hooks",
          hallmark: "Silver",
          polish: false,
          customCutting: "Custom Cut 2",
          customDesign: null,
          cut: "Polished",
          die: "Silver Die",
          thickness: "2mm",
          locks: false,
          clarity: "VS1",
          carat: "2",
          size: "Large"
        }
      }
    ]
  }
];

const CategoryTable = () => {
  const [categories, setCategories] = useState(demoCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (category) => {
    setSelectedCategory(category);
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex">
        <Sidebar/>
    <div className="p-6 bg-white rounded-lg shadow-lg mt-28 w-full">
      <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Sub-category Name</th>
            <th className="px-4 py-2 border">Product Type</th>
            <th className="px-4 py-2 border">Product Categories</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="border px-4 py-2">{category.subCategoryName}</td>
              <td className="border px-4 py-2">{category.productType}</td>
              <td className="border px-4 py-2">
                {category.productCategories.map((productCategory, idx) => (
                  <span key={idx} className="block">
                    {productCategory.productCategoryName}
                  </span>
                ))}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  onClick={() => toggleDetails(category)}
                >
                  {showDetails && selectedCategory === category
                    ? "Hide Details"
                    : "View Details"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditional rendering for the detailed view */}
      {showDetails && selectedCategory && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-4">
            Variables for {selectedCategory.subCategoryName}
          </h3>

          {selectedCategory.productCategories.map((productCategory, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="font-semibold text-gray-800">
                Product Category: {productCategory.productCategoryName}
              </h4>
              <table className="min-w-full bg-white border mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Variable</th>
                    <th className="px-4 py-2 border">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(productCategory.variables).map(
                    ([key, value]) => (
                      <tr key={key}>
                        <td className="border px-4 py-2">{key}</td>
                        <td className="border px-4 py-2">
                          {value === true ? "Yes" : value === false ? "No" : value}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default CategoryTable;
