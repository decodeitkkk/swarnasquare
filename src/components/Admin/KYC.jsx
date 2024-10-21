import Sidebar from "./Layout/Sidebar";


const KYC = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className="bg-white p-6 rounded-lg shadow-lg mt-28 w-full">
      <h2 className="text-2xl font-semibold mb-4">KYC Approvals</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Documents</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add dynamic rows here */}
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">john@example.com</td>
            <td className="border px-4 py-2">+91 9876543210</td>
            <td className="border px-4 py-2">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded">View Documents</button>
            </td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">Approve</button>
              <button className="bg-red-500 text-white px-4 py-1 rounded">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default KYC;
