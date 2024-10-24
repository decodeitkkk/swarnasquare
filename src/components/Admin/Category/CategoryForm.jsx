import { useState } from "react";
import Sidebar from "../Layout/Sidebar";

const demoVariables = [
  { name: "purity", label: "Purity (22, 20, 18)", type: "text" },
  { name: "diameter", label: "Diameter (in inches)", type: "text" },
  { name: "lengthWeight", label: "Length/Weight (inches/grams)", type: "text" },
  { name: "loops", label: "Loops (Weight and purity)", type: "text" },
  { name: "hooks", label: "Hooks (Weight and purity)", type: "text" },
  { name: "hallmark", label: "Hallmark (max 10 characters)", type: "text", maxLength: 10 },
  { name: "polish", label: "Polish", type: "checkbox" },
  { name: "customCutting", label: "Custom Cutting", type: "text" },
  { name: "customDesign", label: "Custom Design (upload file)", type: "file" },
  { name: "cut", label: "Cut", type: "text" },
  { name: "die", label: "Die", type: "text" },
  { name: "thickness", label: "Thickness", type: "text" },
  { name: "locks", label: "Locks", type: "checkbox" },
  { name: "clarity", label: "Clarity", type: "text" },
  { name: "carat", label: "Carat (for diamond)", type: "text" },
  { name: "size", label: "Size", type: "text" }
];

const CategoryForm = () => {
  const [selectedVariables, setSelectedVariables] = useState([]);
  const [formData, setFormData] = useState({});

  const handleVariableChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    if (type === "checkbox") {
      setSelectedVariables((prev) =>
        checked ? [...prev, name] : prev.filter((v) => v !== name)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement submission logic
  };

  return (
    <div className="flex">
        <Sidebar/>
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
            onChange={handleVariableChange}
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Select Variables</h3>
          {demoVariables.map((variable) => (
            <div key={variable.name} className="mt-2">
              {variable.type === "checkbox" ? (
                <div>
                  <input
                    type="checkbox"
                    name={variable.name}
                    onChange={handleVariableChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">{variable.label}</label>
                </div>
              ) : variable.type === "file" ? (
                <div>
                  <input
                    type="file"
                    name={variable.name}
                    onChange={handleVariableChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">{variable.label}</label>
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    name={variable.name}
                    maxLength={variable.maxLength || ""}
                    onChange={handleVariableChange}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder={variable.label}
                  />
                </div>
              )}
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
