import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '500px', marginTop: '100px' }}>
      <Form.Control
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="primary" onClick={addTodo} style={{ marginTop: '10px' }}>
        Add
      </Button>
      <ListGroup style={{ marginTop: '10px' }}>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index}>{todo}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
