import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Toggle product dropdown
  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
  };

  // Toggle category dropdown
  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col justify-between mt-28">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Swarna Square</h2>
        <ul className="mt-4">
          <li className="mb-2">
            <Link to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded block">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/user-management" className="hover:bg-gray-700 p-2 rounded block">
              User Management
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/kyc" className="hover:bg-gray-700 p-2 rounded block">
              KYC Approvals
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/inr-transaction" className="hover:bg-gray-700 p-2 rounded block">
              INR Transactions
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/gold-transaction" className="hover:bg-gray-700 p-2 rounded block">
              Gold Transactions
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/order-list" className="hover:bg-gray-700 p-2 rounded block">
              Orders
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/custom-designs" className="hover:bg-gray-700 p-2 rounded block">
              Custom Designs
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin-users" className="hover:bg-gray-700 p-2 rounded block">
              Admin Users
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/home" className="hover:bg-gray-700 p-2 rounded block">
              Home Page Management
            </Link>
          </li>

          {/* Product Management with Dropdown */}
          <li className="mb-2">
            <button onClick={toggleProductDropdown} className="w-full text-left hover:bg-gray-700 p-2 rounded flex items-center justify-between">
              Product Management
              <span>{isProductOpen ? '▲' : '▼'}</span>
            </button>
            {isProductOpen && (
              <ul className="pl-4 mt-2">
                <li className="mb-2">
                  <Link to="/admin/product-form" className="hover:bg-gray-700 p-2 rounded block">
                    Add Product
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/admin/products" className="hover:bg-gray-700 p-2 rounded block">
                    View Products
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Category Management with Dropdown */}
          <li className="mb-2">
            <button onClick={toggleCategoryDropdown} className="w-full text-left hover:bg-gray-700 p-2 rounded flex items-center justify-between">
              Category Management
              <span>{isCategoryOpen ? '▲' : '▼'}</span>
            </button>
            {isCategoryOpen && (
              <ul className="pl-4 mt-2">
                <li className="mb-2">
                  <Link to="/admin/category-form" className="hover:bg-gray-700 p-2 rounded block">
                    Add Category
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/admin/category" className="hover:bg-gray-700 p-2 rounded block">
                    View Categories
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="p-4">
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
