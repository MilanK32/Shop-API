import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class='nav'>
      <input type='checkbox' id='nav-check' />
      <div class='nav-header'>
        <div class='nav-title'>Shopping Plan</div>
      </div>
      <div class='nav-btn'>
        <label for='nav-check'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class='nav-links'>
        <a href='/'>Lists</a>
        <a href='/shops'>Shops</a>
        <a href='/categories'>Categories</a>
      </div>
    </div>
  );
};

export default Navbar;
