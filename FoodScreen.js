import React, { useState, useEffect } from 'react';
import './FoodScreen.css';


const FoodScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from an API
    fetch('https://api.example.com/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Food Screen</h1>
      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodScreen;
