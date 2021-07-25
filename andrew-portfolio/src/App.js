import React from 'react';
import NavMenu from "./components/Navmenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
        
      <Router>
      
        <NavMenu />
    
        <Switch>
        
            <Route path="/about">
                <About />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
            </Route> 
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/resume">
                <Resume />
            </Route> 
            <Route path="/">
                <Home />
            </Route> 
        </Switch>

      </Router>
        
      <Footer />
    </div>
  );
}

export default App;
