import React, { useEffect, useState } from 'react'
import './TodoStyle.css'
import ListTask from './ListTask'


function Todo() {  

    const [task,setTask]=useState([])

    useEffect(() => {
      document.title=`You have ${task.length} pending task(s)`
    })
    

    const [value,setValue]=useState("")

    const handleAdd=()=>{
        // console.log(value);
        addTask(value)

        // clear the input box  also add input box value={value}
        setValue("")
    }

    const addTask=(title)=>{
        const newTask=[...task,{title}]
        setTask(newTask)
    }

    const deleteTask=(index)=>{
        const items=[...task]
        items.splice(index,1)
        setTask(items)
    }


  return (
    <>
    <div className='container'>

        <div className="header">TODO APP</div>

        <div className="add-task">
            <input className='input' type="text" placeholder='Add new task' onChange={(e)=>{setValue(e.target.value);}} value={value} />
            <button className='add-btn' onClick={handleAdd} >ADD</button>
        </div>

        <div className="task">
            {task.map((task,index)=>(
            <ListTask task={task} deleteTask={deleteTask} index={index} key={index} />
            ))}
        </div>
         
    </div>
    </>
  )
}

export default Todo