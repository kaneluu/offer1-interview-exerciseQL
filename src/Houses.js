import React from "react";
import './App.css';
import data from "./homes.json";


export const Houses = () => {
    return(
        <>
        <div className="App-body">
        {data.map((house, key) =>{
            return (
                <div key = {key}>
                    <button onClick={() => alert(house.property.description +' in '+ house.property.address.city
                + '. Copy and paste this link to view the house: ' + house.property.primaryImageUrl)}> House {house.id}</button>
                    <h4>${house.price + "   "}  ({house.state})</h4>
                    <p> {house.property.squareFeet + " "}sqrt</p>
                    {/* <li>{house.property.description + " in "}{house.property.address.city}</li> */}
                    <li>{house.property.numberBaths} Bathrooms</li>
                    <li>{house.property.numberBedrooms} Bedrooms</li>
                    <p></p>
                </div>
            );
        })}
        </div>
        </>
    )
}