import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col justify-between mt-28">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Swarna Square</h2>
        <ul className="mt-6">
          <li className="mb-4">
            <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded block">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/user-management" className="hover:bg-gray-700 p-2 rounded block">
              User Management
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/kyc" className="hover:bg-gray-700 p-2 rounded block">
              KYC Approvals
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/inr-transaction" className="hover:bg-gray-700 p-2 rounded block">
              INR Transactions
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/gold-transaction" className="hover:bg-gray-700 p-2 rounded block">
              Gold Transactions
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/order-list" className="hover:bg-gray-700 p-2 rounded block">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/custom-designs" className="hover:bg-gray-700 p-2 rounded block">
              Custom Designs
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin-users" className="hover:bg-gray-700 p-2 rounded block">
              Admin Users
            </Link>
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
