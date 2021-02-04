import React from 'react';
import { Link } from 'react-router-dom';

const navstyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f5913e',
  margin: '0px',
  padding: '5px 10px',
};

const linkstyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '15px',
};

const Navbar = () => (
  <div className="navbar" style={navstyle}>
    <h3 style={{ margin: '5px' }}>
      Math Magician Calculator
      <i className="fas fa-magic" style={{ marginLeft: '5px' }} />
    </h3>
    <div className="links">
      <Link to="/home" style={linkstyle} className="link">
        <i className="fas fa-home" style={{ marginRight: '5px' }} />
        Home
      </Link>
      <Link to="/calculator" style={linkstyle} className="link">
        <i className="fas fa-calculator" style={{ marginRight: '5px' }} />
        Calculator
      </Link>
      <Link to="/quote" style={linkstyle} className="link">
        <i className="far fa-comments" style={{ marginRight: '5px' }} />
        Quote
      </Link>
    </div>

  </div>
);

export default Navbar;
