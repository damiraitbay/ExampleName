import React, { useEffect } from 'react';
import { useState } from "react"
function Child() {
const[taskName, setTaskName] =  useState('')
const[tasks, setTasks] = useState([])
useEffect(()=>{
  alert('Компонент ашылды')
  return()=>{
    alert('Компонент өшірілді')
  }
}, [])
useEffect(()=>{
  alert('Тапсырма қосылды')
}, [tasks])
  return (
 <div>
     <input type="text" onChange={(e)=> setTaskName(e.target.value)}/>
     <button onClick={()=> {
       setTasks([...tasks, {taskName: taskName}])
     }}>Тапсырманы қосу</button>

     {tasks.map((task)=>{
           return(
            <div>
              {task.taskName}
            </div>
           )
     })}
      </div>
  );
}
export default Child;
