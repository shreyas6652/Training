import React, {Component } from 'react';
import moment from "moment";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clock.css'
class Clock extends Component {
    state = {  
        time:moment().format("DD-MM-YYYY hh:mm:ss"),
        isClockStart:true,
      }
      //Lifecycle after render
      componentDidMount()
      {
        this.timerID=setInterval(()=>this.tick(),1000)
      }
    //Lifecycle
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    //Clock Function
      tick =()=>
      {
        this.setState({time:moment().format("DD-MM-YYYY hh:mm:ss")})
      }
    stopTimer=()=>
     {
    clearInterval(this.timerID);
    this.setState({isClockStart:false})
     }
  //Starts the tick method
  startTimer=()=>
  {
    this.timerID=setInterval(()=>this.tick(),1000)
    this.setState({isClockStart:true})
  }
    render() { 
        return (  
            <div>
              <center>
              <div class="time">
     <h1>
            Tick Clock
         </h1>
 
    <h3>{this.state.time}</h3>
    </div>
    { this.state.isClockStart ?
 <center> <Button variant="primary" onClick={()=>{this.stopTimer()}}>Stop Clock</Button></center>
  :
  <Button variant="primary" onClick={()=>{this.startTimer()}}>Start Clock</Button>
    }
            </center>

            </div>
        );
    }
}
export default Clock;