import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginFormPage from './components/LoginForm';
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';

function App() {
  const location = useLocation();

  const restrictedPaths = ['/login', '/signup'];
  const renderNavigation = !restrictedPaths.includes(location.pathname);

  return (
    <>
      {renderNavigation && <Navigation />}
      <Routes>
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/signup" element={<SignupFormPage />} />
      </Routes>
    </>
  );
}


export default App;
