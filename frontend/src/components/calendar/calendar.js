
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}

export default CalendarCard;