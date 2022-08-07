import React from "react";
import bang from "../images/bang.jpg";

const Banner = () => {
  return (
    <div style={{ height: "200px", width: "400px", overflow:"hidden" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bang} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">2
            <img src={bang} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bang} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
