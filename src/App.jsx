import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DetailRecipePage from './pages/DetailRecipePage'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes> */}
        <DetailRecipePage></DetailRecipePage>
      </BrowserRouter>
    </>
  )
}

export default App
