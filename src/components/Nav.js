import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Nav.css';
import logoF1 from '../logo.svg';


function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <nav className="menu">
        <Link style={navStyle} to="/">
          <img id="logo" src={logoF1} alt="Logo F1"/>
        </Link>
        <Link style={navStyle} to="/">
          <h3>Formula One</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/tabela">
            <li>Overall Standings</li>
            </Link>
            <Link  style={navStyle} to="/pilotos">
            <li>F1 Drivers</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
