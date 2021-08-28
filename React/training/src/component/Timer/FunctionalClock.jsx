import React, {useState,useEffect } from 'react';
import moment from "moment";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clock.css'
function FunctionalClock()
{
    const [Time, setTime] = useState(moment().format("DD-MM-YYYY hh:mm:ss"));
    const [loop,setLoop]=useState(true)

    const tick =()=>{
        setLoop(false)
     
        setTime(moment().format("DD-MM-YYYY hh:mm:ss"))
        setInterval(()=>tick(),1000)
    }
    return(
        <div>
            {loop ? <div>
                {tick()}
                </div>
                :
                <div></div>
                }
        <center>
        <div class="time">
<h1 style={{color:"red"}}> 
    
    
      Tick Clock Using Method
     
   </h1>

<h3>{Time}</h3>
</div>
      </center>

      </div>
    )
}
export default FunctionalClock;