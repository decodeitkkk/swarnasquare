import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar";

// Mock user data for example purposes
const usersData = [
  {
    id: 1,
    userName: "John Doe",
    signupDate: "2024-01-20",
    designation: "Customer",
    address: "123 Main St",
    customerType: "Retail",
    companyTurnover: "₹10 Crore",
    location: "Mumbai",
    email: "john@example.com",
    phone: "+91 9876543210",
    walletAmount: 5000,
    goldWalletAmount: 15,
    kycDocuments: "Approved",
    orders: [
      { orderId: 1, orderDate: "2024-01-15", status: "Completed" },
      { orderId: 2, orderDate: "2024-01-20", status: "Pending" },
    ],
    customDesignRequests: [
      { designId: 1, designName: "Custom Ring", uploadDate: "2024-01-12" },
    ],
    transactionHistory: [
      { transactionId: 1, type: "Add", amount: 2000, date: "2024-01-18" },
    ],
    goldTransactionHistory: [
      { transactionId: 1, type: "Purchase", amount: 2, date: "2024-01-18" },
    ],
    addresses: [
      { addressId: 1, address: "123 Main St" },
      { addressId: 2, address: "456 Park Ave" },
    ],
  },
];

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewProfile = (userId) => {
    const user = usersData.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Signup Date</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Customer Type</th>
              <th className="px-4 py-2">Company Turnover</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.userName}</td>
                <td className="border px-4 py-2">{user.signupDate}</td>
                <td className="border px-4 py-2">{user.designation}</td>
                <td className="border px-4 py-2">{user.address}</td>
                <td className="border px-4 py-2">{user.customerType}</td>
                <td className="border px-4 py-2">{user.companyTurnover}</td>
                <td className="border px-4 py-2">{user.location}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleViewProfile(user.id)}
                    className="bg-blue-500 text-white px-5 py-1 rounded text-base text-nowrap"
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* User Profile Section */}
        {selectedUser && (
          <div className="bg-gray-50 p-4 mt-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">User Profile: {selectedUser.userName}</h3>
            <p><strong>Wallet Amount (INR):</strong> ₹{selectedUser.walletAmount}</p>
            <p><strong>Gold Wallet Amount:</strong> {selectedUser.goldWalletAmount} grams</p>
            <p><strong>KYC Status:</strong> {selectedUser.kycDocuments}</p>

            {/* Orders Table */}
            <h4 className="text-lg font-semibold mt-4">Orders:</h4>
            <table className="min-w-full bg-white border mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Order Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.orders.map((order) => (
                  <tr key={order.orderId}>
                    <td className="border px-4 py-2">{order.orderId}</td>
                    <td className="border px-4 py-2">{order.orderDate}</td>
                    <td className="border px-4 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Custom Design Requests Table */}
            <h4 className="text-lg font-semibold mt-4">Custom Design Requests:</h4>
            <table className="min-w-full bg-white border mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2">Design Name</th>
                  <th className="px-4 py-2">Upload Date</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.customDesignRequests.map((design) => (
                  <tr key={design.designId}>
                    <td className="border px-4 py-2">{design.designName}</td>
                    <td className="border px-4 py-2">{design.uploadDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Transaction History Table */}
            <h4 className="text-lg font-semibold mt-4">INR Transaction History:</h4>
            <table className="min-w-full bg-white border mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2">Transaction ID</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.transactionHistory.map((txn) => (
                  <tr key={txn.transactionId}>
                    <td className="border px-4 py-2">{txn.transactionId}</td>
                    <td className="border px-4 py-2">{txn.type}</td>
                    <td className="border px-4 py-2">₹{txn.amount}</td>
                    <td className="border px-4 py-2">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Gold Transaction History Table */}
            <h4 className="text-lg font-semibold mt-4">Gold Transaction History:</h4>
            <table className="min-w-full bg-white border mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2">Transaction ID</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount (grams)</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.goldTransactionHistory.map((txn) => (
                  <tr key={txn.transactionId}>
                    <td className="border px-4 py-2">{txn.transactionId}</td>
                    <td className="border px-4 py-2">{txn.type}</td>
                    <td className="border px-4 py-2">{txn.amount} grams</td>
                    <td className="border px-4 py-2">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Address Book */}
            <h4 className="text-lg font-semibold mt-4">Address Book:</h4>
            <ul className="list-disc list-inside">
              {selectedUser.addresses.map((addr) => (
                <li key={addr.addressId}>{addr.address}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
