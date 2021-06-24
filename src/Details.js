import React from "react";
import './App.css';
import data from "./homes.json";
import { useHistory } from 'react-router-dom';



export const Details = (props) => {
    const history = useHistory();
    return(
        <header>
            Welcome to Offer1

        <div>
        {data.map((house, key) =>{
            return (
                <div key = {key}>
                    <p><img className = "photo" src = {house.property.primaryImageUrl}></img></p>
                    <h4>${house.price + " "}  ({house.state})</h4>
                    <p> {house.property.squareFeet + " "}sqrt</p>
                    <li>{house.property.numberBaths} Bathrooms</li>
                    <li>{house.property.numberBedrooms} Bedrooms</li>
                    <p></p>
                </div>
            );
        })}
        <button onClick={() => history.goBack()}>Go Back</button>

        </div>
        </header>
    )
}