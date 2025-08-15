import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './dashboard.css'; 
import LeftNavbar from './components/LeftNavbar';
import CalendarWidget from './components/CalendarWidget';

function App() {
  return (
      <div className="dashboard-wrapper">
          <div className="dashboard-left">
            <LeftNavbar />
          </div>

          <div className="dashboard-middle">
            {/* Middle content */}
          </div>

          <div className="dashboard-right">
            <CalendarWidget />
          </div>
      </div>
  );
}

export default App;
