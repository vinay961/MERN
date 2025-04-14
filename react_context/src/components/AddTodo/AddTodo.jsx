import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ updateList }) {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      updateList(todo);
      setTodo('');
    }
  };

  return (
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;