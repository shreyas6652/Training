import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import Clock from './component/Timer/Clock'
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import React from 'react';
function App() {

  return (
    
 <React.Fragment>
   
   <BrowserRouter>
   <Switch>
   <Route path='/clock' component={Clock}></Route>
   <Route path='/' component={Timer}></Route>
    
   </Switch>
   </BrowserRouter>
  
 </React.Fragment>
  );
}

export default App;
