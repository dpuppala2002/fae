import React, { useState, useEffect } from 'react';
import './InstamartScreen.css';


const InstamartScreen = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    // Fetch grocery data from an API
    fetch('https://api.example.com/groceries')
      .then((response) => response.json())
      .then((data) => setGroceries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Instamart Screen</h1>
      <div>
        {groceries.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstamartScreen;
