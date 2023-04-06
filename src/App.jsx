import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DetailRecipePage from './pages/DetailRecipePage'
import UserProfileMainPage from './pages/UserProfilePage'
import CollectionDropList from './components/UserProfileComponents/UserProfileCollection/CollectionDropList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Detail" element={<DetailRecipePage/>} />
          <Route path='/User' element={<UserProfileMainPage/>}/>
          <Route path='/temp' element={<CollectionDropList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
