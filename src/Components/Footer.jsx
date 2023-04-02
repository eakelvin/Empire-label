import React from 'react'

function Footer() {
  return (
    
        <div className="container bg-warning p-5">
          <div className="row mt-5 justify-content-around">

            <div className="col-md-4">
                <h1 className="mb-3 mb-md-0">Join Our Newsletter</h1>
                <p className="lead">Subscribe to be the first to hear about our exclusive offers and latest arrivals!</p>
                <div className="input-group edit1">
                  <input type="text" className="form-control" placeholder="Please enter a valid email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-dark btn-lg" type="button">Go</button>
                </div>
            </div>

            <div className="col-md-3">
              <h2>&copy; 2022 EMPIRE</h2>
              <div className="p-5">
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-spotify text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
              
            </div>

            <div className="col-md-3">
              <h2>About Us</h2>
              <p>Learn more about us</p>
            </div>

          </div>
        </div>
  )
}

export default Footer
