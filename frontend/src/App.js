import React, { useState, useEffect } from "react";
import ShopList from "./components/ShopsList";
import Navbar from "./UI/Navbar";
import "./App.css";

function App() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/shops")
      .then((res) => res.json())
      .then((result) => {
        setShops(result);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className='App'>
      <Navbar />
      <ShopList shops={shops} />
    </div>
  );
}

export default App;
