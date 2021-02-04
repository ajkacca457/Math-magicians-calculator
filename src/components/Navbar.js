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
    <h3 style={{ margin: '5px' }}>Math Magician Calculator</h3>
    <div className="links">
      <Link to="/home" style={linkstyle} className="link">Home</Link>
      <Link to="/calculator" style={linkstyle} className="link">Calculator</Link>
      <Link to="/quote" style={linkstyle} className="link">Quote</Link>
    </div>

  </div>
);

export default Navbar;
