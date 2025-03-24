import './TodoList.css';
import { useState } from 'react';

import Items from './TodoItems.jsx'

function List({ tasks }) {
    const [showDesc, setShowDesc] = useState(null);
    return (
        <>
            <br />
            <hr />
            <h2>Tasks List</h2>
            
            {tasks.map((task, index) => (
                <div key={index} className='list'>
                    <h3>{index + 1}.</h3>
                    <input type="text" value={task.title} readOnly />
                    <Items />
                    
                    {/* <div className='desc'>
                        {showDesc === index ? (
                            <p 
                                onClick={() => setShowDesc(null)} 
                                style={{ cursor: "pointer", color: "blue" }}
                            >
                                {task.desc} (Click to Hide)
                            </p>
                        ) : (
                            <p 
                                onClick={() => setShowDesc(index)} 
                                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                            >
                                Description (Click to Show)
                            </p>
                        )}
                    </div> */}
                </div>
            ))}
        </>
    );
}

export default List;
