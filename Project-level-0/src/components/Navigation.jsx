import React from "react";
import logo from "../images/logo.svg"
import search from "../images/search.svg"
import cart from "../images/addcart.svg"
import menu from "../images/menu.svg"
import "../App.css"
function Navigation() {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>Watches</li>
          <li>Smart Phones</li>
          <li>TV Applications</li>
          <li>Laptops</li>
        </ul>
        <div className="right-side">
          <img src={search} alt="search" />
          <img src={cart} alt="search" />
          <img src={menu} alt="search" />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
