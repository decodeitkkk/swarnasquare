import React, { useState } from 'react';
import Sidebar from './Layout/Sidebar';

const AdminUserModule = () => {
  const [userDetails, setUserDetails] = useState({
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    role: 'admin',
    accessRights: {
      finance: false,
      operations: false,
      projectManagement: false,
      sales: false,
      marketing: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setUserDetails((prevState) => ({
        ...prevState,
        accessRights: { ...prevState.accessRights, [name]: checked },
      }));
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user creation logic (e.g., API call to save user in database)
    console.log('New Admin User Details:', userDetails);
  };

  return (
    <div className='flex'>
        <Sidebar/>
    <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
      <h2 className="text-2xl font-semibold mb-4">Create New Admin User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={userDetails.username}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            name="role"
            id="role"
            value={userDetails.role}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., Admin, Super Admin"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Access Rights</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="finance"
              checked={userDetails.accessRights.finance}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="finance">Finance</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="operations"
              checked={userDetails.accessRights.operations}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="operations">Operations</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="projectManagement"
              checked={userDetails.accessRights.projectManagement}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="projectManagement">Project Management</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="sales"
              checked={userDetails.accessRights.sales}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="sales">Sales</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="marketing"
              checked={userDetails.accessRights.marketing}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AdminUserModule;
