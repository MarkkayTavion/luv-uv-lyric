import React, { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from "./components/Index";
import Tracks from "./components/Tracks";
import { ContextController } from "./context";

function App() {
  return (
    <ContextController>
    <Router>
     <React.Fragment>
      <Navbar />
      <Tracks />
        <div className="container">
            <Routes>
              <Route exact path="/" component={Index} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  );
}

export default App;
