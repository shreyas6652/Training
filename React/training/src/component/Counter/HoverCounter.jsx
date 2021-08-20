import React, { Component } from 'react';
import Counter from './Counter'
class HoverCounter extends Component {
    state = {  }
    render() {
        const { count,incrementCount }=this.props
        return (  
            <>
             <br></br><br></br>
             <button onMouseOver={incrementCount}>Hovered {count} times</button>
            </>
        );
    }
}
 
export default Counter(HoverCounter);