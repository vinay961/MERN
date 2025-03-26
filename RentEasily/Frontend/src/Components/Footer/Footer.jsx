import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-2 small footer">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} RentHouse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
