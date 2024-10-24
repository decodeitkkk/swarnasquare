import React, { useState } from 'react';
import Sidebar from './Layout/Sidebar';

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Example data
  const orders = [
    {
      orderId: '#ORD123456',
      dateTime: '2024-01-20 10:45 AM',
      userName: 'John Doe',
      goldValue: '10 grams',
      serviceCharges: '₹500',
      status: 'In Process',
      goldPrice: '₹4800/gram',
      address: '123 Street, Mumbai, India',
      product: 'Gold Necklace, Ring',
      customDesign: 'Yes',
      dateOfDelivery: '2024-01-25',
    },
    // Add more orders here
  ];

  // Filter and search logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || order.status === statusFilter;
    const matchesDateRange = (!startDate || new Date(order.dateTime) >= new Date(startDate)) &&
                             (!endDate || new Date(order.dateTime) <= new Date(endDate));

    return matchesSearch && matchesStatus && matchesDateRange;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
        <h2 className="text-2xl font-semibold mb-4">Orders List</h2>

        {/* Search and Filters */}
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search by Order ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="">All Statuses</option>
            <option value="Service Charge Pending">Service Charge Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Process">In Process</option>
            <option value="Failed">Failed</option>
          </select>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-4 py-2 rounded"
          />
        </div>

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
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{order.orderId}</td>
                <td className="border px-4 py-2">{order.dateTime}</td>
                <td className="border px-4 py-2">{order.userName}</td>
                <td className="border px-4 py-2">{order.goldValue}</td>
                <td className="border px-4 py-2">{order.serviceCharges}</td>
                <td className="border px-4 py-2">{order.status}</td>
                <td className="border px-4 py-2">{order.goldPrice}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.customDesign}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">Track Delivery</button>
                </td>
                <td className="border px-4 py-2">{order.dateOfDelivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
