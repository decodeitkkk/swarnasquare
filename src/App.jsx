
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Common/Layout'
import LandingPage from './components/Home/LandingPage'
import Products from './components/Products'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import MeetUs from './components/MeetUs'
import WhoWeAre from './components/AboutUs/WhoWeAre'
import WhyUs from './components/AboutUs/WhyUs'
import WhatWeDo from './components/AboutUs/WhatWeDo'
import HowWeDo from './components/AboutUs/HowWeDo'
import FAQSection from './components/AboutUs/FAQ'
import Dashboard from './components/Admin/Dashboard/index'
import UserManagement from './components/Admin/UserMangament'
import KYC from './components/Admin/KYC'
import INRTransactionHistory from './components/Admin/INRTransactionHistory'
import GoldTransactionHistory from './components/Admin/GoldTransaction'
import OrderList from './components/Admin/OrderList'
import AdminUserModule from './components/Admin/AdminUser'
import CustomDesignModule from './components/Admin/CustomDesign'
import ProductForm from './components/Admin/Product/ProductForm'
import ProductTable from './components/Admin/Product/ProductTable'
import HomepageEditor from './components/Admin/HomePage'
import CategoryForm from './components/Admin/Category/CategoryForm'
import CategoryTable from './components/Admin/Category/CategoryTable'
import { useEffect, useState } from 'react'
// import LandingPage from './components/Home/LandingPage'

function App() {
  
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const demoProducts = [
    {
      name: "Gold Chain",
      category: "Jewelry",
      subCategory: "Chains",
      price: 299.99,
      quantity: 10,
      status: "Available",
    },
    {
      name: "Silver Beads",
      category: "Jewelry",
      subCategory: "Beads",
      price: 59.99,
      quantity: 25,
      status: "Available",
    },
    {
      name: "Diamond Ring",
      category: "Jewelry",
      subCategory: "Rings",
      price: 1299.99,
      quantity: 5,
      status: "Out of Stock",
    },
    {
      name: "Gold Necklace",
      category: "Jewelry",
      subCategory: "Necklaces",
      price: 499.99,
      quantity: 8,
      status: "Available",
    },
    {
      name: "Platinum Earrings",
      category: "Jewelry",
      subCategory: "Earrings",
      price: 799.99,
      quantity: 12,
      status: "Available",
    },
  ];

  useEffect(() => {
    // Set demo data to state
    setProducts(demoProducts);
  }, []);

  const editProduct = (index) => {
    // Implement edit functionality here
    console.log("Edit product at index:", index);
  };

  const deleteProduct = (index) => {
    // Implement delete functionality here
    console.log("Delete product at index:", index);
  };

  return (
    <>
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-us/who-we-are' element={<WhoWeAre/>} />
        <Route path='/about-us/why-us' element={<WhyUs/>} />
        <Route path='/about-us/what-we-do' element={<WhatWeDo/>} />
        <Route path='/about-us/how-we-do' element={<HowWeDo/>} />
        <Route path='/about-us/faq' element={<FAQSection/>} />
        <Route path='/meet-us' element={<MeetUs/>} />
        <Route path='/admin/dashboard' element={<Dashboard/>} />
        <Route path='/admin/user-management' element={<UserManagement/>} />
        <Route path='/admin/kyc' element={<KYC/>} />
        <Route path='/admin/inr-transaction' element={<INRTransactionHistory/>} />
        <Route path='/admin/gold-transaction' element={<GoldTransactionHistory/>} />
        <Route path='/admin/order-list' element={<OrderList/>} />
        <Route path='/admin-users' element={<AdminUserModule/>} />
        <Route path='admin/custom-designs' element={<CustomDesignModule/>} />
        <Route path='/admin/product-form' element={<ProductForm/>} />
        <Route path='/admin/products' element={<ProductTable 
        products={products} 
        editProduct={editProduct} 
        deleteProduct={deleteProduct} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />} />
        <Route path='/admin/home' element={<HomepageEditor/>} />
        <Route path='/admin/category-form' element={<CategoryForm/>} />
        <Route path='/admin/category' element={<CategoryTable/>} />
      </Routes>
      </BrowserRouter>
    </Layout>
    
    </>
  )
}

export default App
