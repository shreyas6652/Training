import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import Clock from './component/Timer/Clock';
import UpdateForm from './component/Table/UpdateForm';
import HookForm from './component/Form/HookForm';
import Count from './component/Counter/Count';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import TableForm from './component/Table/TableForm';
import React from 'react';
import Planner from './component/Planner/Planner';
import Menu from './component/menubar'

function App() {

  return (
    
 <React.Fragment>
<Menu></Menu>
   <BrowserRouter>

   <Switch>
   <Route path='/clock' component={Clock}></Route>
   <Route path='/count' component={Count}></Route>
    <Route path='/form' component={HookForm}></Route>
    <Route path="/table" component={TableForm}></Route>
    <Route path='/update/' component={UpdateForm}></Route>
    <Route path='/todo' component={Planner}></Route>
   </Switch>
   </BrowserRouter>
  
 </React.Fragment>
  );
}

export default App;
