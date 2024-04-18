import React, { useState } from 'react';
import './App.css';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import FoodScreen from './FoodScreen';
import InstamartScreen from './InstamartScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Assume successful login logic sets isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          {/* Render main screens when logged in */}
          <MainScreen />
          <FoodScreen />
          <InstamartScreen />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
