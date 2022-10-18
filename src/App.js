import React from 'react';
import './index.css';
import Home from './Home';
import Projects from './Projects';
import "./bg.css";
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
<div className="home-page">  
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={  <Home/>}/>
          <Route path='/about' element={<div>  <About/></div>}/>
          <Route path='/projects' element={<div>  <Projects/></div>}/>
          <Route path='/contact' element={<div> <Contact/></div>}/>
        </Routes>
        </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
