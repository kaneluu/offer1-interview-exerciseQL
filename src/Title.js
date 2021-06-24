import React from "react";
import './App.css';
import data from "./homes.json";
import { useHistory } from 'react-router-dom';



export const Title = () => {
    const history = useHistory();

    return(
        <header>
            Welcome to Offer1
            <h2>Title Companies</h2>
        <div>
        {/* Display title companies by mapping values */}
        {data.map((house, key) =>{
        return (
                <div key = {key}>
                    <h3>{house.property.address.addressLine1}, {house.property.address.addressLine2} {house.property.address.city}, {house.property.address.state}, {house.property.address.zip}</h3>
                    <p><img className = "photo" src = {house.property.primaryImageUrl} alt = ""></img></p>
                    <p>Name: {house.titleCompany.name}</p>
                    <p>Email: {house.titleCompany.email}</p>
                    <p>Phone: {house.titleCompany.phone}</p>
                    <p>Address: {house.titleCompany.address.addressLine1}, {house.titleCompany.address.city}, {house.titleCompany.address.state}, {house.titleCompany.address.zip}</p>
                </div>
            );
        })}
        <button onClick={() => history.push('/details')}>Back to Details</button>

        </div>

        </header>

        


    )
}