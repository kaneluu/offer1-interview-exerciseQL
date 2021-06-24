// import React from 'react';
// import './App.css';
// import datas from "./homes.json";
// import {Houses} from './Houses.js';

// function App() {
//   // const [] = useState([])
//   return (
//     <div className="App">
//       <header className="App-body">
//         Welcome to Offer1!!!
//          {/* {data.map((post, index) => {
//           return(
//             <div key = {index}>
//             <p>{post.price}</p>
//             <p>{post.listingAgent.id} {post.listingAgent.licenseNumber}</p>
//             </div>
//           )
//         })}  */}
//           {datas.map(data =>(
//             <Row key={data.id}>
//             House {data.id}  Price: {data.price} || Status: {data.state}
//             </Row>
 
//           ))}
        
//       </header>
//    </div>
//     // <div>
//     //   {
//     //     Object.keys(data.object).map((key,i) =>(
//     //       <p key = {i}>
//     //         <span>Key Name: {key}</span>
//     //         <span>Value: {data.object[key]}</span>
//     //       </p>
//     //     ))
//     //   }
//     // </div>
//     <div className = "App">
//       <Houses />
//     </div>
//   )
// }
import React, {Component} from 'react';
import {Houses} from "./Houses.js";

class App extends Component{
  render(){
    return (
      <div className = "App">Welcome to Offer1
      <p>Here are all the available houses</p>
        <Houses></Houses>
      </div>
    );
  }
}

export default App;

