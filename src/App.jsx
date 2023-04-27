import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DetailRecipePage from './pages/DetailRecipePage';
import PublishRecipe from './pages/PublishRecipe';
import AllRecipe from './pages/AllRecipe';
import RecoverPage from './pages/RecoverPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeLoader = () => setLoading(false);
    window.addEventListener("load", removeLoader);
    return () => window.removeEventListener("load", removeLoader);
  }, []);


  if (loading) {
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div className="loader"></div>
    </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Detail" element={<DetailRecipePage />} />
          <Route path="/PublishRecipe" element={<PublishRecipe />} />
          <Route path="/AllRecipe" element={<AllRecipe />} />
          <Route path="/Recover" element={<RecoverPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
