import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from "./homes.json";

function App() {
  // const [] = useState([])
  return (
    <div className="App">
      <header className="App-body">
        Welcome to Offer1!!!
         {data.map((post, index) => {
          return(
            <div key = {post.id}>
            <p>{post.state} {post.price}</p>
            <p>{post.listingAgent.id} {post.listingAgent.licenseNumber}</p>
            </div>
          )
        })} 
        
      </header>
   </div>
    // <div>
    //   {
    //     Object.keys(data.object).map((key,i) =>(
    //       <p key = {i}>
    //         <span>Key Name: {key}</span>
    //         <span>Value: {data.object[key]}</span>
    //       </p>
    //     ))
    //   }
    // </div>
    // <div className = "App">
    //   <Houses />
    // </div>
  )
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
