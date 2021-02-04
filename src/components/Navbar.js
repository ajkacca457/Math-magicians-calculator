import React from 'react';

const navstyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f5913e',
  margin: '0px',
  padding: '5px 10px',
};

const Navbar = () => (
  <div className="navbar" style={navstyle}>
    <h3 style={{ margin: '5px' }}>Math Magician Calculator</h3>
    <div className="links">
      <a href="https://www.google.com/">Home</a>
      <a href="https://www.google.com/">Calculator</a>
      <a href="https://www.google.com/">Quote</a>
    </div>

  </div>
);

export default Navbar;
