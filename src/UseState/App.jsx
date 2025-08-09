import { useState } from "react"
function App(){
    const[state, setState] =  useState(0)
    const[name, setName] =  useState('')
    const[name1, setName1] = useState('')
    function count(){
        setState(state+1)
    }
    function count1(){
        setState(state-1)
    }
    function submit(){
        setName1(name)
    }
return(
    <div>
<input type="text" onChange={(e)=> {
    setName(e.target.value)
}}/> <button onClick={submit}>submit</button>
<h1>{name1}</h1>

<button onClick={count}>+</button>
<button onClick={count1}>-</button>
<p>{state}</p>
    </div>

)
}
export default App