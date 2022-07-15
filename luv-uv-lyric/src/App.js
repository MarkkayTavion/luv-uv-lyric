import React, { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from "./components/Index";

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
        <div className="container">
          
            <Route exact path="/" component={Index} />
          
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
