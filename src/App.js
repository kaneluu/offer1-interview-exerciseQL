import React, {Component} from 'react';
import {Houses} from "./Houses.js";
import {Details} from "./Details.js";
import {Agents} from "./Agents.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{


  render(){
    return (
      <div className = "App">
       
        <Router>
        <Switch>
          <Route path="/" exact>
            <Houses/>
          </Route>

          <Route path="/Details" exact>
            <Details/>
          </Route>
          <Route path="/Agents" exact>
            <Agents/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

