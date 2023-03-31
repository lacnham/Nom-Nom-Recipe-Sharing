import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './components/Login'
import Signup from './components/Signup'
import DetailRecipePage from './pages/DetailRecipePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Detail" element={<DetailRecipePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
