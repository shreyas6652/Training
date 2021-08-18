import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from "moment";
import ClassForm from './ClassForm';
import MethodForm from './MethodForm';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
class Timer extends Component {
  state = {  
    time:moment().format("DD-MM-YYYY hh:mm:ss"),
    name:'',
    address:'',
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
  //Updating Name for ClassForm child class
  updateName=(n)=>
  {
    this.setState({name:n.value})
  }
  //Updating Address for Method Form child function
  updateAddress=(a)=>
  {
    this.setState({address:a.value})
  }
  //Stop the tick of method
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
      <center>
      <div>
     <h1>
       Hello Screen Magic
         </h1>
  <div id="time">
    <h3>{this.state.time}</h3>
  </div>
  {/* Checks Whether to display stop clock or start clock method */}
  { this.state.isClockStart ?
 <center> <Button variant="primary" onClick={()=>{this.stopTimer()}}>Stop Clock</Button></center>
  :
  <Button variant="primary" onClick={()=>{this.startTimer()}}>Start Clock</Button>
    }
  <ClassForm name={this.state.name} updateName={(name)=>{this.updateName(name)}}></ClassForm>
  <MethodForm name={this.state.address}  updateAddress={(ad)=>{this. updateAddress(ad)}}></MethodForm>
      </div>
      </center>
     );
  }
}
export default Timer;