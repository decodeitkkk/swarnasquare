import React from 'react';
import Sidebar from '../Layout/Sidebar';

const ProductTable = ({ products, editProduct, deleteProduct, searchTerm, setSearchTerm }) => {
  return (
    <div className='flex'>
      <Sidebar/>
    <div className="bg-white p-6 rounded shadow-md mt-28 w-full">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      />
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Sub-Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(product =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.subCategory}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.status}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => editProduct(index)} className="text-blue-500">Edit</button>
                  <button onClick={() => deleteProduct(index)} className="text-red-500 ml-2">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProductTable;
