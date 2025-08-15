import React from 'react';
import { Nav } from 'react-bootstrap';
import '../CSSs_components/LeftNavbar.css'; 

function LeftNavbar() {
  return (
    <div className="navbar-container">
      <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default LeftNavbar;
