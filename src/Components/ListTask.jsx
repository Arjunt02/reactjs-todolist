import React from 'react'
import './TodoStyle.css'

function ListTask({task,index,deleteTask}) {
    return (
        <>

            <div className="list-task">
                {task.title}
                <button className='delete-btn' onClick={()=>{deleteTask(index)}}>Delete</button>
            </div>

        </>
    )
}

export default ListTask