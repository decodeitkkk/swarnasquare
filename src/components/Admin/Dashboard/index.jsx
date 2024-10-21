

import Sidebar from '../Layout/Sidebar';

const Dashboard = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-28">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-xl">120</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-xl">45</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">KYC Approvals</h3>
          <p className="text-xl">5 Pending</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Wallet Amount</h3>
          <p className="text-xl">₹500,000</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Gold in Wallet</h3>
          <p className="text-xl">150 grams</p>
        </div>
      </div>
    </div>
    </div>
    
    
    </>
  );
};

export default Dashboard;
