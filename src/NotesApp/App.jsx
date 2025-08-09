import React, { useState } from 'react';
import './App.css'
function App() {
  const now =  new Date().toLocaleString()
  const[page, setPage] =  useState('first')
  const[title, setTitle] =  useState('')
  const[description, setDescription] = useState('')
  const[notes, setNotes] = useState([])
  const[changeFont, setChangeFont] = useState('')
  const[color, setColor] =  useState('')
  function save(){
    setNotes([...notes, {title: title,description: description, date: now, font: changeFont}])
  }
  return (
    <div>
  {page=='first' ?
     <div>
     <p>Notes</p> 
     {notes.map(n=>{
      return(
        <div style={{
          fontWeight: changeFont=='bold' ? 'bold': 'normal', 
          fontStyle: changeFont=='italic' ? 'italic' : 'normal', 
          color: color
        }}>
          <p>{n.title}</p>
          <p>{n.description}</p>
          <p>{n.date}</p>
        </div>
      )
     })}
      <button onClick={()=> {
        setPage('second')
      }}>+</button>
    </div> : 
    
    <div>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between'
      }}>
      <button onClick={()=>{
        setPage('first')
      }}>{`<  All ICloud`}</button> 
      <div>
              <button>📌</button>   
      <button>•••</button>
       <button onClick={save}>Done</button>
      </div> 

      </div>
      {now}
      
     <input style={{
      fontStyle: changeFont=='italic' ? 'italic' : 'normal',
      fontWeight: changeFont=='bold' ? 'bold' : 'normal', 
      color: color
     }}type="text" placeholder='title' onChange={(e)=> {setTitle(e.target.value)}}/>
     <input type="text" placeholder='description' onChange={(e)=> {setDescription(e.target.value)}}/>
    <button onClick={()=> setChangeFont('italic')}>I</button>
     <button onClick={()=> setChangeFont('bold')}>B</button>
     <input type="color" onChange={(e)=> setColor(e.target.value)} />
    </div>}  
    
     
    </div>
  );
}

export default App;
