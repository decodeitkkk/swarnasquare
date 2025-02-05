import Sidebar from "./DashboardLayout/Sidebar";

const GoldTransactionHistory = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
        <h2 className="text-2xl font-semibold mb-4">
          Gold Transaction History
        </h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Date/Time</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Value (grams)</th>
              <th className="px-4 py-2">Remaining Gold (grams)</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add dynamic rows here */}
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">2024-01-20 11:00 AM</td>
              <td className="border px-4 py-2">Added</td>
              <td className="border px-4 py-2">5 grams</td>
              <td className="border px-4 py-2">10 grams</td>
              <td className="border px-4 py-2">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoldTransactionHistory;
