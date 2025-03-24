import './App.css'
import { useState } from 'react';

import Input from './Components/TodoInput.jsx';
import List from './Components/TodoList.jsx';

function App(props) {
  const [tasks, setTask] = useState([]);
  return(
    <>
      <h2>Manage your Task</h2>
      <Input setTask={setTask} tasks={tasks} />
      <List tasks={tasks} setTask={setTask} />
    </>
  )
}

export default App
