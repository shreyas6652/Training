import React, { useState,useEffect } from 'react';
import './Count.css'
function Count() {

    const [count,setCount] = useState(0)
    const [name,setName]=useState()
    useEffect(()=>{
       
        document.title=`${name} Clicked ${count} times`
    },[count])

    function decrement()
    {
        setCount(prevCount=>prevCount-1)
    }
    function increment()
    {
        setCount(prevCount=>prevCount+1)
    }
    return (
        <center>
        <div >Name: <input type="text" onChange={e=>setName(e.target.value)}></input>
        <br></br>
            <button  class="btn btn-danger" onClick={decrement}>-</button>
          <input type="text" onChange={e=>setName(e.target.value)}></input> <span class="countValue">{count}</span> 
            <button class="btn btn-success" onClick={increment}>+</button>
        </div>
        </center>
      );
    
}
 
export default Count;