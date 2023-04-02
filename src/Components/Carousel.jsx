import React from 'react'

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./imagess/p2.jpg" className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./imagess/kd.jpg" className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./imagess/p3.jpg" className="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel
