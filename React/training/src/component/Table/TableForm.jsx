import axios from 'axios'
import React, { Component } from 'react'
import SearchField from "react-search-field";

export class TableForm extends Component {
    state={
        info:[],
        searchValue:'',
        tempinfo:[],
    }
    async componentDidMount(){
        var res;
        res=await axios.get("http://127.0.0.1:5000/api/info")
        this.setState({info:res.data,tempinfo:res.data})
        console.log(this.state.info)
    }
   async Deleteinfo(sno)
    {
       var res=await axios.delete("http://127.0.0.1:5000/api/edit/"+sno)
        res=await axios.get("http://127.0.0.1:5000/api/info")
        this.setState({info:res.data})
    }
    async PostInfo(){
        var Name=document.getElementById("Name").value
        var Age=document.getElementById("Age").value
        var Mobile=document.getElementById("Mobile").value
        var info={
            "Name":Name,
            "Age":Age,
            "Mobile":Mobile

        }
        if(Name&&Age&&Mobile)
           {
           var res=await axios.post('http://127.0.0.1:5000/api/info',info)
           console.log(res)
           alert("Data Added")
           res=await axios.get("http://127.0.0.1:5000/api/info")
           this.setState({info:res.data})
           } 
    }
    SearchInfo(e)
    {
     
      var itr;
      var filteredlist=[]
      console.log(e)
     
      for(itr=0;itr<this.state.tempinfo.length;itr++)
      {
        var res=this.state.tempinfo[itr]

        if(res.Name.includes(e))
        {
          filteredlist.push(res)
        }
        else if(res.Mobile.includes(e))
        {
          filteredlist.push(res)
        }
        else if(res.Age<(e-5)||res.Age>(e+5))
        {
          filteredlist.push(res)
        }
      }
      console.log(filteredlist)
      this.setState({info:filteredlist})
    }
    render() {
    
        return (
            <div>

              <div>
    <center>

    <div style={{margin:"1% 30% 0% 30%"}} > 
  <div class="form-group" >

    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Name" id="Name" required></input> <br></br>

  </div>
  <div class="form-group">
    
    <input type="number" class="form-control" placeholder="Age" id="Age" required></input> <br></br>
  </div>
  <div class="form-group">
  
    <input type="number" class="form-control"  placeholder="Mobile" id="Mobile" required></input> <br></br>
  </div>
  <br></br>
  <button class="btn btn-primary" onClick={()=>{this.PostInfo()}}>Add</button>
</div>
<br></br>    <input
  placeholder="Search..."
  onKeyUp={(e)=>{this.SearchInfo(e.target.value)}}

  classNames="test-class"
/>
    </center>
</div>
              <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {this.state.info.map((info)=>
    <tr>
      <th scope="row">{info.sno}</th>
      <td>{info.Name}</td>
      <td>{info.Age}</td>
      <td>{info.Mobile}</td>
      <td>
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
export default TableForm
