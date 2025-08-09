import React, { useState } from 'react';
import img from '../assets/Снимок экрана 2025-06-29 140603.png'
function App() {
  const[task, setTask] = useState({})
  const[tasks, setTasks] = useState([])
  const[filter, setFilter] =  useState('all')
  function add(){
    if(task.trim()){
    setTasks([...tasks, {taskName: task, completed: false}])
    setTask('')}
  }
  function handleRemove(id){
     setTasks(tasks.filter((task, index)=> index!=id))
  }
  function toggle(index){
    setTasks(tasks.map((task, i)=> (i==index? {...task, completed: !task.completed}: task))
)
     }
  return (
    <div>
        <input type="text" value={task.taskName} onChange={(e)=> setTask(e.target.value)}/> 
        <button onClick={add}>add</button>
        <img src={img} alt=""/>
        <div className='buttons'>
          <button onClick={()=> setFilter('all')}>all</button> <button onClick={()=> setFilter('complete')}>complete</button> <button onClick={()=> setFilter('incomplete')}>incomplete</button>
        </div>
        <div>
          {tasks.map((a, index)=>{
            return(
              <div>
                <div>
                     <span>{a.taskName}</span> <button onClick={()=> handleRemove(index)}>🗑️</button> <button onClick={()=>toggle(index)}>{a.completed ? '✅': '❌'}</button>
                </div>
                  </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
