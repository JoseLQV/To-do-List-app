import React, { useState } from "react";
import "./Task.css";

export default function Task({ task, onRemove }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const saveEdit = () => {
    if (!title.trim()) return;
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className={`task-container ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-input"
          />
          <div className="task-buttons">
            <button className="btn-edit" onClick={saveEdit}>Save</button>
            <button className="btn-delete" onClick={cancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>
              {title}
            </h3>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
              {description}
            </p>
          </div>
          <div className="task-buttons">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn-delete" onClick={() => onRemove(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
