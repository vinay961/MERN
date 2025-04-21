import Todo from "../Todo/Todo.jsx";
import './TodoList.css';
import { useContext } from "react";
import TodoContext from "../../context/TodoContext.js";

function TodoList({onDelete, onEdit}) {
    const { todo } = useContext(TodoContext);

    return (
        <div className="todo-list">
            {todo.length > 0 ? (
                todo.map((td) => (
                    <Todo 
                        unique_id={td.id} 
                        item={td.text} 
                        isCompleted={td.completed} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
}

export default TodoList;