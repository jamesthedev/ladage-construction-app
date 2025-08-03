import React from 'react';

const FeaturedCarousel: React.FC = () => {
  return (
    <div id="featuredCarousel" className="carousel slide shadow rounded" data-bs-ride="carousel">
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img
            src="/images/stock/1.jpg"
            className="d-block w-100"
            alt="Porch view 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/4.jpg"
            className="d-block w-100"
            alt="Porch view 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/3.jpg"
            className="d-block w-100"
            alt="Porch view 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FeaturedCarousel;
