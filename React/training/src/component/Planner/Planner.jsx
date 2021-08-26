import React, { Component } from 'react'
import axios from 'axios';
class Planner extends Component {
    state={
        task:[],
        Desc:'',
        Time:''
    }
   async componentDidMount()
    {
        var res=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
        this.setState({task:res.data})
    }
    async PostInfo(){
 
        var info={
            "Description":this.state.Desc,
            "Time":this.state.Time,
            "Status":"To do"
        }
        console.log(info)
        if(this.state.Desc&&this.state.Time)
           {
           var res=await axios.post('https://flasktodoapp6.herokuapp.com/api/info',info)
           console.log(res)
           alert("Data Added")
         
           res=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
           this.setState({task:res.data})
           } 
           
    }
    async Deleteinfo(sno)
    {
       var res=await axios.delete("https://flasktodoapp6.herokuapp.com/api/edit/"+sno)
        res=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
        this.setState({task:res.data})
    }
  async  Updateinfo(info)
   {
       
       if(info.Status=="To do")
       {
        var status={
            "Description":info.Description,
            "Time":info.Time,
            "Status":"Completed"
                  }
        }
        else
        {
            var status={
                "Description":info.Description,
            "Time":info.Time,
            Status:"To do"
                      }
        }
        console.log(status)
    var res=await axios.put('https://flasktodoapp6.herokuapp.com/api/edit/'+info.sno,status)
    res=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
    this.setState({task:res.data})
   }
    changeDesc(event){
        
        this.setState({Desc:event})
    }
    changeTime(event){
      
        event=''+event
        this.setState({Time:event})
        console.log(this.state.Time)
    }
 
    render() {
       
        return (
            <div>
                 
               
                <center>
                <h3>Plan your day</h3>
<div style={{margin:"1% 30% 0% 30%"}} > 
<div class="form-group" >

<input type="text" value={this.state.Desc} onChange={(e)=>{this.changeDesc(e.target.value)}} class="form-control" aria-describedby="emailHelp" placeholder="Name" id="Name" required></input> <br></br>

</div>
<div class="form-group">

<input type="Time" onChange={(e)=>{this.changeTime(e.target.value)}} value={this.state.Time} class="form-control" placeholder="Age" id="Age" required></input> <br></br>
</div>

<br></br>
<button class="btn btn-primary" onClick={()=>{this.PostInfo()}}>Add</button>
</div>
<br></br>   
</center>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Description</th>
      <th scope="col">Time</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <div style={{visibility: "hidden"}}>
      {this.state.sno=1}
      </div>
    </tr>
  </thead>
  <tbody>
      {this.state.task.map((info)=>

    <tr >
       
      <th scope="row">{this.state.sno++}</th>
      <td>{info.Description}</td>
      <td>{info.Time}</td>
      {info.Status=="To do" ? <td style={{color:"red"}}>{info.Status}</td>:<td style={{color:"Green"}}>{info.Status}</td>}     
      <td><button type="button" class="btn btn-outline-warning mr-1" onClick={()=>{this.Updateinfo(info)}} style={{margin:5}}>Change Status </button>
      <button type="button" class="btn btn-outline-danger" onClick={()=>{this.Deleteinfo(info.sno)}}>Delete</button>
      </td>
    </tr>

    )}
    </tbody>
    </table> 
            </div>
        )
    }
}

export default Planner
