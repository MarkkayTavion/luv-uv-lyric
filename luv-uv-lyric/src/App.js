import React, { useState } from "react";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from "./components/Index";
import Tracks from "./components/Tracks";
import { ContextController } from "./context";
import Lyrics from "./components/Lyrics";


function App() {
  return (
    <ContextController>
    <Router>
     <React.Fragment>
      <Navbar />
      <Tracks />
        <div className="container">
            <Routes>
              <Route  path="/" component={Index} />
              <Route  path="/lyrics/:id" component={Lyrics} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  );
}

export default App;
