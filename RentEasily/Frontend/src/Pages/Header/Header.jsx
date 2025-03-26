import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="/images\logo.png" alt="Logo" width="40" height="40" className="me-2" />
        SearchWithUs
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Rent House/Apartment</a></li>
                <li><a className="dropdown-item" href="#">Buy House</a></li>
                <li><a className="dropdown-item" href="#">Buy Apartment</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">HelpCenter</a>
            </li>
            <li className="nav-item d-lg-block ms-lg-5 d-flex d-lg-inline">
              <a href="#" className="btn btn-primary">Sell with Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
