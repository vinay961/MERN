import './Todo.css';

import React from 'react';
import { useState } from 'react';

function Todo({unique_id,item,isCompleted,onDelete, onEdit}) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(item);

    function handleEditBtn() {
        if (isEditing) {
            setIsEditing(false);
            onEdit(unique_id, newText);
        }
        else {
            setIsEditing(true);
        }
    }
    return (
        <div className="todo">
            <input type="checkbox" checked={isCompleted} />
            <input 
                type="text"   
                value={newText} 
                onChange={(e) => setNewText(e.target.value)}
                readOnly={!isEditing}
            />
            <button className="delete" onClick={()=> onDelete(unique_id)}>Delete</button>
            <button className="edit" onClick={handleEditBtn}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
    );
}

export default Todo;