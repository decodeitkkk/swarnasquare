import React, { useState, useEffect } from 'react';
import Sidebar from './Layout/Sidebar';

const CustomDesignModule = () => {
  // Sample data for custom designs (replace this with API call)
  const [customDesigns, setCustomDesigns] = useState([]);

  useEffect(() => {
    // Fetch custom design data from the API and set state
    const fetchCustomDesigns = async () => {
      // Example API call
      // const response = await fetch('/api/customDesigns');
      // const data = await response.json();
      // setCustomDesigns(data);
      
      // Temporary mock data
      setCustomDesigns([
        {
          id: 1,
          userName: 'John Doe',
          designName: 'Modern Ring',
          uploadDate: '2024-10-20',
          status: 'Under Review',
        },
        {
          id: 2,
          userName: 'Jane Smith',
          designName: 'Gold Bracelet',
          uploadDate: '2024-10-19',
          status: 'Approved',
        }
      ]);
    };

    fetchCustomDesigns();
  }, []);

  return (
    <div className='flex'>
        <Sidebar/>
    <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
      <h2 className="text-2xl font-semibold mb-4">Custom Design Uploads</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">User Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Design Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Upload Date</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Status</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customDesigns.map((design) => (
            <tr key={design.id}>
              <td className="py-2 px-4 border-b border-gray-200">{design.userName}</td>
              <td className="py-2 px-4 border-b border-gray-200">{design.designName}</td>
              <td className="py-2 px-4 border-b border-gray-200">{design.uploadDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{design.status}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  View
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CustomDesignModule;
