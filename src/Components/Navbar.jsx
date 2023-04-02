import React from 'react'

function Navbar() {
  return (
        <nav className="navbar navbar-dark bg-dark">
            <nav className="navbar bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./imagess/emp.png" alt="Logo" width="60" height="54" className="d-inline-block align-text-top" />
                    EMPIRE
                </a>
                </div>
            </nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <img className="flag" src="./imagess/ghana.png" />
                </li>
                <li className="nav-item">
                <img className="flag" src="./imagess/us.webp" alt="" />
                </li>
                <li className="nav-item">
                <img className="flag" src="./imagess/niger.png" alt="" />
                </li>
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                <a className="nav-link big" href="#">About Us</a>
                </li> 
            </ul>
    </nav>
  )
}

export default Navbar

