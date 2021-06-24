import React, {Component} from 'react';
import {Houses} from "./Houses.js";
import {Details} from "./Details.js";
import {Agents} from "./Agents.js";
import {Escrow} from "./Escrow.js";
import {Title} from "./Title.js";
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
          <Route path="/Escrows" exact>
            <Escrow/>
          </Route>
          <Route path="/Titles" exact>
            <Title/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

