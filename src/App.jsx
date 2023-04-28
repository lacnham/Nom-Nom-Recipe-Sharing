import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DetailRecipePage from './pages/DetailRecipePage'
import PublishRecipe from './pages/PublishRecipe'
import AllRecipe from './pages/AllRecipe'
import UserProfileMainPage from './pages/UserProfilePage'
import { CollectionRecipes } from './components/UserProfileComponents/UserProfileCollection/CollectionRecipes'

// import CollectionRecipes from './components/UserProfileComponents/CollectionRecipes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Detail" element={<DetailRecipePage />} />
          <Route path="/User" element={<UserProfileMainPage />} />
          {/* <Route path="/Recipe" element={<Collec />} /> */}
          <Route path="/Collection/:id" element={<CollectionRecipes />} />
          <Route path="/PublishRecipe" element={<PublishRecipe />} />
          <Route path="/AllRecipe" element={<AllRecipe />} />
          <Route path="/CreateRecipe" element={<PublishRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
