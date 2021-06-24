import React, { useState } from "react";
import './App.css';
import data from "./homes.json";
import { useHistory } from 'react-router-dom';
import './index.css';



export const Details = () => {
    const history = useHistory();
    const [filterCity, setFilterCity] = useState("");

    return(
        <header>
            Welcome to Offer1
        <h4>Filter by:</h4>
        <div className="filter" >
        <input placeholder="City" value={filterCity} onChange={(e) => setFilterCity(e.target.value)}/>
        </div>    
        <div>
        {data.map((house, key) =>{
            if(filterCity.length !== 0){
                if(house.property.address.city.toLowerCase().startsWith(filterCity.toLowerCase())){
                    return (
                        <div>
                    <p><img className = "photo" src = {house.property.primaryImageUrl} alt = ""></img></p>
                    <h4>${house.price + " "}  ({house.state})</h4>
                    <p>{house.property.description} with {house.property.squareFeet + " "}sqrt
                     located in {house.property.address.city}, {house.property.address.state}</p>
                    <p>Address: {house.property.address.addressLine1}, {house.property.address.addressLine2} {house.property.address.city}, {house.property.address.state}, {house.property.address.zip}</p>
                    <li>Type: {house.property.propertyType}</li>
                    <li>{house.property.numberBaths} Bathrooms</li>
                    <li>{house.property.numberBedrooms} Bedrooms</li>
                    <p></p>
                        </div>
                    )
                }
                 else{
                    return null
                }
            }

            return (
                <div key = {key}>
                    <h3>{house.property.address.addressLine1}, {house.property.address.addressLine2} {house.property.address.city}, {house.property.address.state}, {house.property.address.zip}</h3>
                    <p><img className = "photo" src = {house.property.primaryImageUrl} alt = ""></img></p>
                    <h4>${house.price + " "}  ({house.state})</h4>
                    <p>{house.property.description} with {house.property.squareFeet + " "}sqrt
                     located in {house.property.address.city}, {house.property.address.state}</p>
                    <li>Type: {house.property.propertyType}</li>
                    <li>Owner Type: {house.property.ownerType}</li>
                    <li>{house.property.numberBaths} Bathrooms</li>
                    <li>{house.property.numberBedrooms} Bedrooms</li>
                </div>
            );
        })}
        <div className="filter"><button onClick={() => history.push('/')}>Main Page</button>
        <button onClick={() => history.push('/escrows')}>Escrow Companies </button>
        <button onClick={() => history.push('/agents')}>Contact Agents </button></div>
        </div>
        </header>
    )
}