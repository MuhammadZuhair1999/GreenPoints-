import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import GreenPointsList from "./components/greenpoints-list.component";
import EditGreenPoint from "./components/edit-greenpoint.component";
import CreateGreenPoint from "./components/create-greenpoint.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
     <Navbar />
      <br/>
      <Route path="/" exact component={GreenPointsList} />
      <Route path="/edit/:id" component={EditGreenPoint} />
      <Route path="/create" component={CreateGreenPoint} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
