
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Common/Layout'
import LandingPage from './components/Home/LandingPage'
import Products from './components/Products'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import MeetUs from './components/MeetUs'
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
        <Route path='/meet-us' element={<MeetUs/>} />
      </Routes>
      </BrowserRouter>
    </Layout>
    
    </>
  )
}

export default App
