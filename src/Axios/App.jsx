import axios from 'axios'
import { useEffect, useState } from 'react'
function App(){
const[data, setData] =  useState([])
const[name, setName] = useState('')
    useEffect(()=> {
       axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/application')
       .then(res=> {
        setData(res.data)
       })
    }, [])
 
       function send(){
        axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/application', 
        {
           name: name, 
           email: 'altynbek@gmail.com'
        })
        .then(res=>{ console.log(res.data)})}
        
    
 
    return(
        <div>
        {data.map(d=>{
            return(
                <div>
                    <p>{d.name}</p>
                    <p>{d.email}</p>
                    <p>{d.city}</p>
                    <p>{d.phone}</p>
                </div>
            )
        })}
        <input type="text" onChange={(e)=> {
            setName(e.target.value)
        }} />
        <button onClick={send}>send data</button>
        </div>
    )
}
export default App