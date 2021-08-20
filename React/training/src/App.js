import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';
import Clock from './component/Timer/Clock';
import ClickCounter from './component/Counter/ClickCounter'
import HoverCounter from './component/Counter/HoverCounter';
import HookForm from './component/Form/HookForm';
import Count from './component/Counter/Count';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import React from 'react';
function App() {

  return (
    
 <React.Fragment>

   <BrowserRouter>
 
   <Switch>
   <Route path='/clock' component={Clock}></Route>
   <Route path='/count' component={Count}></Route>
    <Route path='/form' component={HookForm}></Route>
    
   </Switch>
   </BrowserRouter>
  
 </React.Fragment>
  );
}

export default App;
