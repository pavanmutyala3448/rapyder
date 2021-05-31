import React from "react";
import "../css/carousel.css";
import Navbar from "./navbar";
export default function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <Navbar />
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            alt="img"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            alt="img-1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            alt="img-2"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
