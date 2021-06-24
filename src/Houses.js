import React from "react";
import './App.css';
import data from "./homes.json";
import { Details } from "./Details.js"
import { useHistory } from 'react-router-dom';



export const Houses = (props) => {
    const history = useHistory();
    return(
        <header>
            Welcome to Offer1

        <div className="App-body">
      <p>Here are all the available houses</p>
            <button onClick={() => history.push('/details')}> Views </button>

        </div>
        </header>
    )
}