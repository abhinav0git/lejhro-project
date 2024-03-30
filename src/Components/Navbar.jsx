import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar container text-center">

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/innovations">Innovations</a>
        </li>
        <div className="vr"></div>
        <li className="nav-item">
          <a className="nav-link" href="/business-services">Business Services</a>
        </li>
        <div className="vr"></div>
        <li className="nav-item">
          <a className="nav-link" href="/financial-services">Financial Services</a>
        </li>
        <div className="vr"></div>
        <li className="nav-item">
          <a className="nav-link" href="http://www.bootcamp.lejhro.com/" target="_blank" rel="noreferrer">Bootcamp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
