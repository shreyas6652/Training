import axios from 'axios'
import React, { Component } from 'react'
import './TableForm.css'
export class TableForm extends Component {
    state={
        info:[],
        searchValue:'',
        tempinfo:[],
        sno:1,
        Name:'',
        Age:'',
        Mobile:'',
        Loading:false
    }
    async componentDidMount(){
        var res;
        res=await axios.get("https://tablereactapp.herokuapp.com/api/info")
        this.setState({info:res.data,tempinfo:res.data,Loading:true})
       

    }
    Updateinfo(sno)
    {
      window.location.replace("/update/"+sno)
     
    }
   async Deleteinfo(sno)
    {
       var res=await axios.delete("https://tablereactapp.herokuapp.com/api/edit/"+sno)
        res=await axios.get("https://tablereactapp.herokuapp.com/api/info")
        this.setState({info:res.data,tempinfo:res.data})
    }
    async PostInfo(){
 
        var info={
            "Name":this.state.Name,
            "Age":this.state.Age,
            "Mobile":this.state.Mobile

        }
        if(this.state.Name&&this.state.Age&&this.state.Mobile)
           {
           var res=await axios.post('https://tablereactapp.herokuapp.com/api/info',info)
           alert("Data Added")
           this.setState({Name:'',Age:'',Mobile:''})
           res=await axios.get("https://tablereactapp.herokuapp.com/api/info")
           this.setState({info:res.data,tempinfo:res.data})
           } 
           
    }
    SearchInfo(e)
    {
     
      var itr;
      var filteredlist=[]
      
       e=e.toLowerCase()
       var num
    
      for(itr=0;itr<this.state.tempinfo.length;itr++)
      {
        var res=this.state.tempinfo[itr]
        var LowRes=res.Name.toLowerCase()
     
        
        if(LowRes.includes(e))
        {
          filteredlist.push(res)
          
        }
        else if(res.Mobile.includes(e))
        {
          filteredlist.push(res)
      
        }
        else if((num=parseInt(e))&&res.Age>(num-5)&&res.Age<(num+5))
        {
          filteredlist.push(res)      
        }
      }
     
      this.setState({info:filteredlist})
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
 {!this.state.Loading ?
               <div>
                   <img src="https://c.tenor.com/5o2p0tH5LFQAAAAj/hug.gif" alt="Loading ..."></img>
                 </div>
                 : 
                 <div> 
              <div>
    <center>

    <div style={{margin:"1% 30% 0% 30%"}} > 
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
  <button class="btn btn-primary" onClick={()=>{this.PostInfo()}}>Add</button>
</div>
<br></br>    <input
  placeholder="Search..."
  onKeyUp={(e)=>{this.SearchInfo(e.target.value)}}
    
  classNames="test-class"
/>
<img src="https://listimg.pinclipart.com/picdir/s/485-4851736_free-png-search-icon-search-icon-free-download.png"></img>
    </center>
</div>

{ this.state.info.length==0 ?
  <center>
    <h3 style={{color:"red"}}>
    No Information Found
    </h3>
    </center>
:

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Mobile</th>
      <th scope="col">Action</th>
      <div style={{visibility: "hidden"}}>
      {this.state.sno=1}
      </div>
    </tr>
  </thead>

  <tbody>

      {this.state.info.map((info)=>
    <tr>
      <th scope="row">{this.state.sno++}</th>
      <td>{info.Name}</td>
      <td>{info.Age}</td>
      <td>{info.Mobile}</td>
      <td>
      <button type="button" class="btn btn-outline-warning mr-1" onClick={()=>{this.Updateinfo(info.sno)}} style={{margin:5}}>Update </button>
      <button type="button" class="btn btn-outline-danger" onClick={()=>{this.Deleteinfo(info.sno)}}>Delete</button>
      
      </td>
    </tr>
    )}
    </tbody>
    
    </table> 
    }
    </div>}    
            </div>
        )
    }
}
export default TableForm
