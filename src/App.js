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
import {Details} from "./Details.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div className = "App">
       
        <Router>
        <Switch>
          <Route path="/" exact>
            <Houses/>
          </Route>

          <Route path="/Details" exact>
            <Details/>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

