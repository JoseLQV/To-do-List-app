import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CSSs_components/calendar.css';

function CalendarWidget() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} onClickDay={() => null} value={date} />
    </div>
  );
}

export default CalendarWidget;
