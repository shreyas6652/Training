import React, { useState } from 'react';

const MethodForm=(props)=>{
    const[age,setAge]=useState("Male");
    return(
        <div>
            <h1>Hello, I am from Groot</h1>
            <p>Address:<input type="text"  onKeyUp={(e)=>{props.updateAddress(e.target)}}></input></p>
            <p>Address:{props.name}</p>
            <p>Gender:{age}</p>
        </div>
    )
}
export default MethodForm