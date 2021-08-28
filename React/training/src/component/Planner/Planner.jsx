import React, { Component } from 'react'
import axios from 'axios';
import moment from "moment";
class Planner extends Component {
    state={
        Task:[],
        PastTask:[],
        FutureTask:[],
        Description:'',
        Date:'',
        StartTime:'',
        EndTime:'',
        EventCalendar:'',
        Loading:false
    }
   async componentDidMount()
    {
        
        var CLIENT_ID = "288898601929-k7o0gg564vr7dnl63s4tv40j9bn7oe1r.apps.googleusercontent.com"
        var API_KEY = "AIzaSyBbazzzaiE0aQM-2zSFNJScJ-ZNjrxUkQY"
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        script.defer = true;
         
        const meta = document.createElement("meta");
        meta.name=CLIENT_ID;
        meta.content="%REACT_APP_GOOGLE_ID_OF_WEB_CLIENT%";
        document.head.appendChild(meta);
        document.head.appendChild(script);
        
        var data=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
        var PresentTask=[]
        var PastTask=[]
        var FutureTask=[]
        for(var Iterator=0;Iterator<data.data.length;Iterator++)
        {
            
            if((moment().format("YYYY-MM-DD"))==data.data[Iterator].Date)
            {
                PresentTask.push(data.data[Iterator])
            }
            else if((moment().format("YYYY-MM-DD"))>data.data[Iterator].Date)
            {
                PastTask.push(data.data[Iterator])
            }
            else if((moment().format("YYYY-MM-DD")<data.data[Iterator].Date))
            {
                FutureTask.push(data.data[Iterator])
            }
        }
        
        this.setState({Task:PresentTask,PastTask:PastTask,FutureTask:FutureTask,Loading:true})

    }
    async PostInfo(){
        var Date=(moment().format("YYYY-MM-DD"))
        var EventNotOccured=true
        if(Date>this.state.Date)
        {
            alert("Event Date is already over")
            EventNotOccured=false
        }
        
        else if(this.state.StartTime>=this.state.EndTime)
        {
            alert("End time cant be before Start Time")
            EventNotOccured=false
        }
        else if(Date==this.state.Date)
        {
          if(Date==this.state.Date)
          {
              var Time=(moment().format("HH:SS"))+":00"
              if(Time>this.state.StartTime)
              {
                  alert("Event Start time already over")
                  EventNotOccured=false
              }
              else
              {
                var iterator;
                for(iterator=0;iterator<this.state.PresentTask.length;iterator++)
                {
                  if(this.state.StartTime==this.state.PresentTask[iterator].startTime)
                  {
                    alert("Already one event is scheduled at same time")
                    EventNotOccured=false
                  }
                  else if(this.state.StartTime<this.state.PresentTask[iterator].startTime)
                  {
                    if(this.state.endTime>this.state.PresentTask[iterator].startTime)
                    {
                      alert("Already one event is scheduled at same time")
                      EventNotOccured=false
                  }
                  else{
                    if(this.state.EndTime>=this.state.PresentTask[iterator].startTime)
                    {
                      alert("Already one event is scheduled at same time")
                      EventNotOccured=false
                    }
                  }
                }
              
        }
      }
        }
      }
        else if(Date<this.state.Date)
        {
          var iterator;
                for(iterator=0;iterator<this.state.FutureTask.length;iterator++)
                {
                  if(this.state.StartTime==this.state.FutureTask[iterator].startTime)
                  {
                    alert("Already one event is scheduled at same time")
                    EventNotOccured=false
                  }
                  else if(this.state.StartTime<this.state.FutureTask[iterator].startTime)
                  {
                    if(this.state.endTime>this.state.FutureTask[iterator].startTime)
                    {
                      alert("Already one event is scheduled at same time")
                      EventNotOccured=false
                  }
                  else{
                    if(this.state.EndTime>=this.state.FutureTask[iterator].startTime)
                    {
                      alert("Already one event is scheduled at same time")
                      EventNotOccured=false
                    }
                  }
                }
              }
        }
        
        if(EventNotOccured)
        {
           
                var info={
                    "Description":this.state.Description,
                    "Date":this.state.Date,
                    "StartTime":this.state.StartTime,
                    "EndTime":this.state.EndTime,
                    "EventCalendar":false,
                    "Status":"To do"
                }
         
                if(this.state.Description&&this.state.StartTime)
                {
                var res=await axios.post('https://flasktodoapp6.herokuapp.com/api/info',info)
                
                alert("Data Added")
                
                var data=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
                var PresentTask=[]
                var PastTask=[]
                var FutureTask=[]
                for(var Iterator=0;Iterator<data.data.length;Iterator++)
                {
                    
                    if((moment().format("YYYY-MM-DD"))==data.data[Iterator].Date)
                    {
                        PresentTask.push(data.data[Iterator])
                    }
                    else if((moment().format("YYYY-MM-DD"))>data.data[Iterator].Date)
                    {
                        PastTask.push(data.data[Iterator])
                    }
                    else
                    {
                        FutureTask.push(data.data[Iterator])
                    }
                }
                this.setState({Task:PresentTask,PastTask:PastTask,FutureTask:FutureTask})
                } 
            }
   
            
}
    async Deleteinfo(sno)
    {
       var res=await axios.delete("https://flasktodoapp6.herokuapp.com/api/edit/"+sno)
        var data=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
        var PresentTask=[]
        var PastTask=[]
        var FutureTask=[]
        for(var Iterator=0;Iterator<data.data.length;Iterator++)
        {
            
            if((moment().format("YYYY-MM-DD"))==data.data[Iterator].Date)
            {
                PresentTask.push(data.data[Iterator])
            }
            else if((moment().format("YYYY-MM-DD"))>data.data[Iterator].Date)
            {
                PastTask.push(data.data[Iterator])
            }
            else
            {
                FutureTask.push(data.data[Iterator])
            }
        }
        this.setState({Task:PresentTask,PastTask:PastTask,FutureTask:FutureTask})
    }
  async  UpdateInfo(info)
   {
       
       if(info.Status=="To do")
       {
        var status={
            "Description":info.Description,
            "Date":info.Date,
            "StartTime":info.StartTime,
            "EndTime":info.EndTime,
            "EventCalendar":false,
            "Status":"Completed"
                  }
        }
        else
        {
            var status={
            "Description":info.Description,
            "Date":info.Date,
            "StartTime":info.StartTime,
            "EndTime":info.EndTime,
            "EventCalendar":false,
            "Status":"To do"
                      }
        }
       
    var res=await axios.put('https://flasktodoapp6.herokuapp.com/api/edit/'+info.sno,status)
    var data=await axios.get("https://flasktodoapp6.herokuapp.com/api/info")
    var PresentTask=[]
    var PastTask=[]
    var FutureTask=[]
    for(var Iterator=0;Iterator<data.data.length;Iterator++)
    {
        
        if((moment().format("YYYY-MM-DD"))==data.data[Iterator].Date)
        {
            PresentTask.push(data.data[Iterator])
        }
        else if((moment().format("YYYY-MM-DD"))>data.data[Iterator].Date)
        {
            PastTask.push(data.data[Iterator])
        }
        else
        {
            FutureTask.push(data.data[Iterator])
        }
    }
    this.setState({Task:PresentTask,PastTask:PastTask,FutureTask:FutureTask})
   }
    changeDesc(event){
        
        this.setState({Description:event})
       

    }
    changeStartTime(event){
      event=event+":00"
        this.setState({StartTime:event})
        console.log(event)
    }
    changeEndTime(event){
        event=event+":00"
        this.setState({EndTime:event})
       
    }
    changeDate(event){
        console.log(event)
        this.setState({Date:event})
       
    }
    AddEvent(info)
    {
        console.log(info)
        var gapi = window.gapi

  var CLIENT_ID = "288898601929-k7o0gg564vr7dnl63s4tv40j9bn7oe1r.apps.googleusercontent.com"
  var API_KEY = "AIzaSyBbazzzaiE0aQM-2zSFNJScJ-ZNjrxUkQY"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  var StartTime=info.Date+"T"+info.StartTime
  var EndTime=info.Date+"T"+info.EndTime
    gapi.load('client:auth2', () => {
      

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
       
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': info.Description,
          'start': {
            'dateTime': StartTime,
            'timeZone': 'Asia/Calcutta'
          },
          'end': {
            'dateTime': EndTime,
            'timeZone': 'Asia/Calcutta'
          },
         
         
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 10},
              {'method': 'popup', 'minutes': 5}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          
          window.open(event.htmlLink)
        })
      })
    })
  }

    render() {
       
        return (
            <div>
                 
               {!this.state.Loading ?
               <div>
                   <img src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" alt="Loading ..."></img>
                 </div>
                 :  
                   
                <center>
                <h3>Plan your day</h3>
<div style={{margin:"1% 30% 0% 30%"}} > 
<div class="form-group" >

<input type="text" value={this.state.Desc} onChange={(e)=>{this.changeDesc(e.target.value)}} class="form-control" aria-describedby="emailHelp" placeholder="Task Description" id="Name" required></input> <br></br>

</div>
<div class="form-group">
    Select Date:
    <input type="Date" onChange={(e)=>{this.changeDate(e.target.value)}} value={this.state.Date} class="form-control" placeholder="Age" id="Age" required></input> <br></br>
Start time:
<input type="Time" onChange={(e)=>{this.changeStartTime(e.target.value)}} value={this.state.StartTime} class="form-control" placeholder="Age" id="Age" required></input> <br></br>
End time:
<input type="Time" onChange={(e)=>{this.changeEndTime(e.target.value)}} value={this.state.EndTime} class="form-control" placeholder="Age" id="Age" required></input> <br></br>
</div>

<br></br>
<button class="btn btn-primary" onClick={()=>{this.PostInfo()}}>Add</button>
</div>
<br></br>   
{
    this.state.Task.length==0 ?
    <center>
        <h3 style={{color:"green"}}>No Task Found</h3>
    </center>
:<center><h4 style={{color:"Green"}}> Today's Task</h4>
<table class="table">

  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Description</th>
      <th scope="col">Date</th>
      <th scope="col">StartTime</th>
      <th scope="col">EndTime</th>
      <th scope="col">Google Calendar</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <div style={{visibility: "hidden"}}>
      {this.state.sno=1}
      </div>
    </tr>
  </thead>
  <tbody>
      {this.state.Task.map((info)=>

    <tr >
       
      <th scope="row">{this.state.sno++}</th>
      <td>{info.Description}</td>
      <td>{info.Date}</td>
      <td>{info.StartTime}</td>
      <td>{info.EndTime}</td>
      <td><button class="btn btn-info" onClick={()=>{this.AddEvent(info)}}> Add Event to Calendar</button></td>
      {info.Status=="To do" ? <td style={{color:"red"}}>{info.Status}</td>:<td style={{color:"Green"}}>{info.Status}</td>}     
      <td><button type="button" class="btn btn-outline-warning mr-1" onClick={()=>{this.UpdateInfo(info)}} style={{margin:5}}>Change Status </button>
      <button type="button" class="btn btn-outline-danger" onClick={()=>{this.Deleteinfo(info.sno)}}>Delete</button>
      </td>
    </tr>

    )}
    </tbody>
    </table>
    
    </center>
    } 
    {
    this.state.FutureTask.length==0 ?
    <center>
        <h6></h6>
    </center>
:<center><h4 style={{color:"Orange"}}> Upcoming Task</h4>
<table class="table">

  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Description</th>
      <th scope="col">Date</th>
      <th scope="col">StartTime</th>
      <th scope="col">EndTime</th>
      <th scope="col">Google Calendar</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <div style={{visibility: "hidden"}}>
      {this.state.sno=1}
      </div>
    </tr>
  </thead>
  <tbody>
      {this.state.FutureTask.map((info)=>

    <tr >
       
      <th scope="row">{this.state.sno++}</th>
      <td>{info.Description}</td>
      <td>{info.Date}</td>
      <td>{info.StartTime}</td>
      <td>{info.EndTime}</td>
      <td><button class="btn btn-info" onClick={()=>{this.AddEvent(info)}}> Add Event to Calendar</button></td>
      {info.Status=="To do" ? <td style={{color:"red"}}>{info.Status}</td>:<td style={{color:"Green"}}>{info.Status}</td>}     
      <td><button type="button" class="btn btn-outline-warning mr-1" onClick={()=>{this.UpdateInfo(info)}} style={{margin:5}}>Change Status </button>
      <button type="button" class="btn btn-outline-danger" onClick={()=>{this.Deleteinfo(info.sno)}}>Delete</button>
      </td>
    </tr>

    )}
    </tbody>
    </table>
    
    </center>
    } 
    {
    this.state.PastTask.length==0 ?
    <center>
        <h3 style={{color:"green"}}></h3>
    </center>
:<center><h4 style={{color:"red"}}> Past Task</h4>
<table class="table">

  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Description</th>
      <th scope="col">Date</th>
      <th scope="col">StartTime</th>
      <th scope="col">EndTime</th>
      <th scope="col">Google Calendar</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <div style={{visibility: "hidden"}}>
      {this.state.sno=1}
      </div>
    </tr>
  </thead>
  <tbody>
      {this.state.PastTask.map((info)=>

    <tr >
       
      <th scope="row">{this.state.sno++}</th>
      <td>{info.Description}</td>
      <td>{info.Date}</td>
      <td>{info.StartTime}</td>
      <td>{info.EndTime}</td>
      <td><button class="btn btn-info" onClick={()=>{this.AddEvent(info)}}> Add Event to Calendar</button></td>
      {info.Status=="To do" ? <td style={{color:"red"}}>{info.Status}</td>:<td style={{color:"Green"}}>{info.Status}</td>}     
      <td><button type="button" class="btn btn-outline-warning mr-1" onClick={()=>{this.UpdateInfo(info)}} style={{margin:5}}>Change Status </button>
      <button type="button" class="btn btn-outline-danger" onClick={()=>{this.Deleteinfo(info.sno)}}>Delete</button>
      </td>
    </tr>

    )}
    </tbody>
    </table>
    
    </center>
    } 
    </center>
    }
            </div>
        )
    }
}

export default Planner
