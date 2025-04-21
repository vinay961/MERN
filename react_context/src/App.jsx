import React from 'react'
import './App.css'
import { useReducer,useState } from 'react';

import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';

import TodoContext from './context/TodoContext.js';
import todoReducer from './reducers/todoReducer.js';
import Todo from './components/Todo/Todo.jsx';

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

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <TodoContext.Provider value={{ todo, setTodo }}>
        <AddTodo updateList={(td)=> { dispatch({type: 'ADD_TODO', payload:{todoText:todo}}) } } />
        <TodoList onDelete={handleDelete} onEdit={handleEdit} />
      </TodoContext.Provider>
    </>
  )
}
 
export default App
