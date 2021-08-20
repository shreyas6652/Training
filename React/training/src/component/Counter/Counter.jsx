import React, {Component } from 'react';
const Counter = WrappedComponent=>{
   class Counter extends Component {
       constructor(props)
       {
           super(props)
        this.state = {
            count:0
          }
       }
       incrementCount=()=>{
           this.setState(prevState=>{
               return{count:prevState.count+1}
           })
       }
      
       render() { 
           return (
               < WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount} />
             )
             
       }
       
   }
   return Counter
}  
export default Counter