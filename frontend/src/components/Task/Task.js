import React, { useState } from "react";
import "./Task.css";

export default function Task({ task, onUpdate, onRemove }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed || false);
  const [isEditing, setIsEditing] = useState(false);

  const saveEdit = () => {
    if (!title.trim()) return; // Don't save empty titles
    
    const updatedTask = { ...task, title: title.trim(), description: description.trim() };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setTitle(task.title);
    setDescription(task.description);
    setIsEditing(false);
  };

  const toggleComplete = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    onUpdate({ ...task, completed: newCompleted });
  };

  return (
    <div className={`task-container ${completed ? "completed" : ""}`}>
      {isEditing ? (
        // Edit Mode
        <div className="task-edit">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
            placeholder="Task title..."
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-textarea"
            placeholder="Description (optional)..."
          />
          <div className="task-buttons">
            <button className="btn-save" onClick={saveEdit}>Save</button>
            <button className="btn-cancel" onClick={cancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        // View Mode
        <div className="task-view">
          <div className="task-content">
            <input
              type="checkbox"
              checked={completed}
              onChange={toggleComplete}
              className="task-checkbox"
            />
            <div className="task-text">
              <h3 className={completed ? "completed-text" : ""}>{title}</h3>
              {description && (
                <p className={completed ? "completed-text" : ""}>{description}</p>
              )}
            </div>
          </div>
          <div className="task-actions">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn-delete" onClick={() => onRemove(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}