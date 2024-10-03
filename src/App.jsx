
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Common/Layout'
import LandingPage from './components/Home/LandingPage'
// import LandingPage from './components/Home/LandingPage'

function App() {
  

  return (
    <>
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products' element={<LandingPage/>} />
        <Route path='/services' element={<LandingPage/>} />
        <Route path='/about-us' element={<LandingPage/>} />
        <Route path='/meet-us' element={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
    </Layout>
    
    </>
  )
}

export default App
