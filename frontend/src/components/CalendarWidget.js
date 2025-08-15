import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CSSs_components/calendar.css';

function CalendarWidget() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <Calendar onChange={setDate} onClickDay={() => null}  value={date} />
    </div>
  );
}

export default CalendarWidget;
