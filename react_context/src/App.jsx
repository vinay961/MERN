import React from 'react'
import './App.css'
import { useState } from 'react';

import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Redux', completed: true },
  ]);

  function handleDelete(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function handleEdit(id, newText) {
    setTodo(todo.map((item) => (item.id === id ? { ...item, text: newText} : item)))
  }

  return (
    <>
      <AddTodo updateList={(td)=> {setTodo([...todo, {id: todo.length + 1, text: td, completed:false}])}} />
      <TodoList todos={todo} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  )
}
 
export default App
