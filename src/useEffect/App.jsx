
import { useState } from "react"
import Child from "./Child"

function App(){
const[open ,setOpen] =  useState(false)
    return(
        <div>
           {open &&  <Child/>  }
  <button onClick={()=> setOpen(!open)}>Компонент</button>
        </div>
    )
}

export default App