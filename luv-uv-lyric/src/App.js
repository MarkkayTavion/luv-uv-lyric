
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from "./components/Index";
import ContentController from "./context";
import Lyrics from "./components/Lyrics";
import Tracks from './components/Tracks';


function App() {
  return (
    <ContentController>
    <Router>
     
      <Navbar />
      
        <div className="container">
            <Routes>
              <Route  path="/" element={<Index />} />
              <Route  path="/lyrics/:id" element={<Lyrics />} />
            </Routes>
          </div>
      
      </Router>
    </ContentController>
  );
}

export default App;
