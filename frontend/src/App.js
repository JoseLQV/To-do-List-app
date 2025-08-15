import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNavbar from './components/LeftNavbar';
import TodoList from './components/TodoList';
import CalendarWidget from './components/CalendarWidget';

function App() {
  return (
    <div>
      <CalendarWidget />
      <TodoList />
      <RightNavbar />
    </div>
  );
}

export default App;
