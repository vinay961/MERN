import './TodoInput.css';
import { useState } from 'react';

function Input({tasks,setTask}){
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleToDo = (e) => {
        e.preventDefault();

        if(!title.trim() || !desc.trim()){
            return;
        }

        const newTask = { title,desc };
        
        setTask([...tasks, newTask]);
        setTitle('');
        setDesc('');
    }

    return (
        <>
            <form action="#" onSubmit={handleToDo}>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name="title" onChange={(e)=>{setTitle(e.target.value)}} />
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                <div className='btn'>
                    <button type="submit">Save</button>
                    <button id='cancel'>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default Input;