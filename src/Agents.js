import React from "react";
import './App.css';
import data from "./homes.json";
import { useHistory } from 'react-router-dom';



export const Agents = () => {
    const history = useHistory();

    return(
        <header>
            Welcome to Offer1
            <h2>Agents List</h2>
        <div>
        {data.map((house, key) =>{
        return (
                <div key = {key}>
                    <p>House {key + 1}</p>
                    <p><img className = "photo" src = {house.property.primaryImageUrl} alt = ""></img></p>
                    <p>Email: {house.listingAgent.user.email}</p>
                    <p>Name: {house.listingAgent.user.firstName} {house.listingAgent.user.lastName}</p>
                    <p>Phone: {house.listingAgent.user.phone}</p>

                </div>
            );
        })}
        <button onClick={() => history.push('/details')}>Back to Details</button>

        </div>

        </header>

        


    )
}