import React, { useState } from 'react';
import Sidebar from '../Layout/Sidebar';

const ProductForm = ({ addProduct }) => {
  const categories = ['Jewelry', ]; // Hardcoded categories
  const subCategories = {
    Jewelry: ['Chains', 'Beads', 'Rings'],
    Accessories: ['Bracelets', 'Earrings'],
    Watches: ['Smartwatches', 'Analog'],
  };

  const [product, setProduct] = useState({
    name: '',
    category: '',
    subCategory: '',
    price: '',
    quantity: '',
    status: 'active',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: '',
      category: '',
      subCategory: '',
      price: '',
      quantity: '',
      status: 'active',
      image: null,
    });
  };

  return (
    <div className='flex'>
      <Sidebar/>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mt-28 w-full">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <div className="mb-4">
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={(e) => {
            handleChange(e);
            setProduct({ ...product, subCategory: '' }); // Reset sub-category on category change
          }}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Sub-Category</label>
        <select
          name="subCategory"
          value={product.subCategory}
          onChange={handleChange}
          className="border rounded w-full p-2"
          // disabled={!product.category}
          required
        >
          <option value="">Select Sub-Category</option>
          {product.category &&
            subCategories[product.category].map((subCat) => (
              <option key={subCat} value={subCat}>
                {subCat}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <select
          name="status"
          value={product.status}
          onChange={handleChange}
          className="border rounded w-full p-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
    </div>
  );
};

export default ProductForm;
