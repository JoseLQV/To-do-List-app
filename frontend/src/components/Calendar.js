// frontend/src/components/Calendar.js
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ margin: "20px" }}>
      <h3>Task Calendar</h3>
      <Calendar onChange={setDate} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
