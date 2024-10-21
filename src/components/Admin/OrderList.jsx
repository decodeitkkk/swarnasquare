import React from 'react';
import Sidebar from './Layout/Sidebar';

const OrderList = () => {
  return (
    <div className='flex'>
      <Sidebar/>
    
    <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
      <h2 className="text-2xl font-semibold mb-4">Orders List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Date/Time Stamp</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Gold Value (grams)</th>
            <th className="px-4 py-2">Service Charges (INR)</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Gold Purchase Price (INR/grams)</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Custom Design</th>
            <th className="px-4 py-2">Track Delivery</th>
            <th className="px-4 py-2">Date of Delivery</th>
          </tr>
        </thead>
        <tbody>
          {/* Example dynamic data row */}
          <tr>
            <td className="border px-4 py-2">#ORD123456</td>
            <td className="border px-4 py-2">2024-01-20 10:45 AM</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">10 grams</td>
            <td className="border px-4 py-2">₹500</td>
            <td className="border px-4 py-2">In Process</td>
            <td className="border px-4 py-2">₹4800/gram</td>
            <td className="border px-4 py-2">123 Street, Mumbai, India</td>
            <td className="border px-4 py-2">Gold Necklace, Ring</td>
            <td className="border px-4 py-2">Yes</td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 text-white px-4 py-1 rounded">Track Delivery</button>
            </td>
            <td className="border px-4 py-2">2024-01-25</td>
          </tr>

          {/* Add more dynamic rows here */}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default OrderList;
