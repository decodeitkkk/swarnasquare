import { useState } from "react";
import Sidebar from "../Layout/Sidebar";

const demoVariables = [
  { name: "purity", label: "Purity (22, 20, 18)" },
  { name: "diameter", label: "Diameter (in inches)" },
  { name: "lengthWeight", label: "Length/Weight (inches/grams)" },
  { name: "loops", label: "Loops (Weight and purity)" },
  { name: "hooks", label: "Hooks (Weight and purity)" },
  { name: "hallmark", label: "Hallmark (max 10 characters)" },
  { name: "polish", label: "Polish" },
  { name: "customCutting", label: "Custom Cutting" },
  { name: "customDesign", label: "Custom Design (upload file)" },
  { name: "cut", label: "Cut" },
  { name: "die", label: "Die" },
  { name: "thickness", label: "Thickness" },
  { name: "locks", label: "Locks" },
  { name: "clarity", label: "Clarity" },
  { name: "carat", label: "Carat (for diamond)" },
  { name: "size", label: "Size" }
];

const CategoryForm = () => {
  const [selectedVariables, setSelectedVariables] = useState([]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setSelectedVariables((prev) =>
      checked ? [...prev, name] : prev.filter((v) => v !== name)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Variables:", selectedVariables);
    // Implement submission logic
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-white rounded-lg shadow-lg mt-28 w-full">
        <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Sub-category Name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter sub-category name"
              name="subCategoryName"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Select Variables</h3>
            {demoVariables.map((variable) => (
              <div key={variable.name} className="mt-2">
                <input
                  type="checkbox"
                  name={variable.name}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label className="text-gray-700">{variable.label}</label>
              </div>
            ))}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
