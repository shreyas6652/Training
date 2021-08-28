import React, { Component } from 'react'
import axios from 'axios'
export class UpdateForm extends Component {
    state={
        Name:'',
        Age:'',
        Mobile:''
    }
    
    async componentDidMount()
    {
        var link=window.location.href.split('/')
        var res=await axios.get("https://tablereactapp.herokuapp.com/api/edit/"+link[4])
        this.setState({Name:res.data.Name,Age:res.data.Age,Mobile:res.data.Mobile})
       

    }
   async UpdateInfo()
    {
        var link=window.location.href.split('/')
      var info={
            "Name":this.state.Name,
            "Age":this.state.Age,
            "Mobile":this.state.Mobile
        }
        var res=await axios.put('https://tablereactapp.herokuapp.com/api/edit/'+link[4],info)
         
           alert("Data Updated")
           window.location.replace("/table")
    }
    changeName(event){
        
        this.setState({Name:event})
    }
    changeMobile(event){
        this.setState({Mobile:event})
    }
    changeAge(event){
        this.setState({Age:event})
    }
    render() {
        return (
            <div>
                
                
                
    <div style={{margin:"1% 30% 0% 30%"}} > 
    <h1 style={{color:"orange"}}>Update the table</h1>
  <div class="form-group" >
 
    <input type="text" value={this.state.Name} onChange={(e)=>{this.changeName(e.target.value)}} class="form-control" aria-describedby="emailHelp" placeholder="Name" id="Name" required></input> <br></br>

  </div>
  <div class="form-group">
    
    <input type="number" onChange={(e)=>{this.changeAge(e.target.value)}} value={this.state.Age} class="form-control" placeholder="Age" id="Age" required></input> <br></br>
  </div>
  <div class="form-group">
  
    <input type="number" onChange={(e)=>{this.changeMobile(e.target.value)}} value={ this.state.Mobile} class="form-control"  placeholder="Mobile" id="Mobile" required></input> <br></br>
  </div>
  <br></br>
  <button class="btn btn-primary" onClick={()=>{this.UpdateInfo()}}>Update Info</button>
</div>
            </div>
        )
    }
}

export default UpdateForm
