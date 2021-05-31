import React from "react";
import "../css/navbar.css";
export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img
              src="https://www.rapyder.com/wp-content/uploads/2017/04/rapyder-logo-2.png"
              alt="img"
            />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
