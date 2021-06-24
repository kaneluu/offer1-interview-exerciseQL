import React from "react";
import './App.css';
import { useHistory } from 'react-router-dom';



export const Houses = () => {
    const history = useHistory();

    return(
        // Here is our main page
        <header className="App">
            Welcome to Offer1

        <div className="App-body">
            <h2>Where we help you to find the house you love!</h2>
            <p>Here are all the available houses</p>
        {/* On-click button to show all the available results */}
            <button onClick={() => history.push('/details')}> Details </button>
        </div>
        </header>
    )
}