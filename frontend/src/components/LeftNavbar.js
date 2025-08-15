import React from 'react';
import { Nav } from 'react-bootstrap';


function RightNavbar() {
  return (
    <div style={{
      height: '100vh',
      width: '200px',
      position: 'fixed',
      left: 0,
      top: 0,
      backgroundColor: '#f8f9fa',
      borderLeft: '1px solid #dee2e6',
      paddingTop: '20px'
    }}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/tasks">Tasks</Nav.Link>
        <Nav.Link href="/calendar">Calendar</Nav.Link>
      </Nav>
    </div>
  );
}

export default RightNavbar;
