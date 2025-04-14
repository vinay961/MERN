import Todo from "../Todo/Todo.jsx";
import './TodoList.css';

function TodoList({todos, onDelete, onEdit}) {
    console.log(todos);

    return (
        <div className="todo-list">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <Todo 
                        unique_id={todo.id} 
                        item={todo.text} 
                        isCompleted={todo.completed} 
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