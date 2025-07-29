import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <span className="logo-bold">Fintech</span><span className="logo-dot">.</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#">Platform</a></li>
        <li><a href="#">Company</a></li>
        <li><a href="#">Industries</a></li>
        <li><a href="#">Resources</a></li>
      </ul>

      <div className="navbar-buttons">
        <button className="btn-outline">SIGN IN</button>
        <button className="btn-filled">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
