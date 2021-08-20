import React, { Component } from 'react';
import Counter from './Counter'
class ClickCounter extends Component {
    
    render() { 
        const { count,incrementCount }=this.props
        return ( 
            <>
            <h1>Counters</h1>
            <button onClick={incrementCount}>Clicked {count} times</button>
            </>
         );
       
    }
}
 
export default Counter(ClickCounter);