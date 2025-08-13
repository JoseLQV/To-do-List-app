// frontend/src/components/Dashboard.js
import { useState } from "react";
import List from "./List";
import MyCalendar from "./Calendar";

function Dashboard() {
  const [lists, setLists] = useState([
    { id: 1, title: "To Do", cards: [{ id: 1, name: "Buy groceries" }] },
    { id: 2, title: "In Progress", cards: [] },
  ]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3, display: "flex" }}>
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <MyCalendar />
      </div>
    </div>
  );
}

export default Dashboard;
