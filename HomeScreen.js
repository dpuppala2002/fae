import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css'; // Import CSS file

const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </nav>
      {/* Add your home screen content */}
    </div>
  );
};

export default HomeScreen;
