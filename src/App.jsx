
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
      </Routes>
      </BrowserRouter>
    </Layout>
    
    </>
  )
}

export default App
