import React from "react";
import './App.css';
import data from "./homes.json";
import { useHistory } from 'react-router-dom';



export const Escrow = () => {
    const history = useHistory();

    return(
        <header>
            Welcome to Offer1
            <h2>Escrow Companies</h2>
        <div>
        {data.map((house, key) =>{
        return (
                <div key = {key}>
                    <h3>{house.property.address.addressLine1}, {house.property.address.addressLine2} {house.property.address.city}, {house.property.address.state}, {house.property.address.zip}</h3>
                    <p><img className = "photo" src = {house.property.primaryImageUrl} alt = ""></img></p>
                    <p>Name: {house.escrowCompany.name}</p>
                    <p>Email: {house.escrowCompany.email}</p>
                    <p>Phone: {house.escrowCompany.phone}</p>
                    <p>Address: {house.escrowCompany.address.addressLine1}, {house.escrowCompany.address.city}, {house.escrowCompany.address.state}, {house.escrowCompany.address.zip}</p>
                </div>
            );
        })}
        <button onClick={() => history.push('/details')}>Back to Details</button>

        </div>

        </header>

        


    )
}