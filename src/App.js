import './App.css';
import React from "react";
import Home from './component/Home/Home';
import { Route, Router, Switch } from 'react-router';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/home'>
           <Home></Home>
        </Route>
      </Switch>
    </Router>
  
      

    </div>
  );
}

export default App;
