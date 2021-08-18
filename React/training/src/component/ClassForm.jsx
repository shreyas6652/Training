import React, {Component } from 'react';
class ClassForm extends Component {
    state = { 
        age:22
     }
    render() { 
        return ( 
            <div>
                <h1 c>Hi I am class Form</h1>
                <p>Name: <input type="text"  onKeyUp={(e)=>{this.props.updateName(e.target)}}></input></p>
                <p>Name: {this.props.name}</p>
                <p>Age:{this.state.age}</p>
            </div>
         );
    }
}
 

export default ClassForm;