import React, { useState } from "react";
import "./ListDisplay.css";
import ChatInput from "../Chat_Input/Chat_Input";
import Task from "../Task/Task";

export default function ListDisplay() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // task = { title, description }
    const newTask = {
      ...task,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="list-display-container">
      <h2>List Here</h2>

      {/* Example add button for testing */}
      <div
        className="add-task"
        onClick={() =>
          addTask({ title: "New Task", description: "Task description" })
        }
      >
        Task +
      </div>

      <div className="tasks-container">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onRemove={removeTask} />
        ))}
      </div>

    </div>
  );
}
