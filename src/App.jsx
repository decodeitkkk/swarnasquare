
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
// import LandingPage from './components/Home/LandingPage'

function App() {
  

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
        <Route path='/admin/admin-users' element={<AdminUserModule/>} />
        <Route path='/admin/custom-designs' element={<CustomDesignModule/>} />
      </Routes>
      </BrowserRouter>
    </Layout>
    
    </>
  )
}

export default App
