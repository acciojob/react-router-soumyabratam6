
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";

import { BrowserRouter, Link, Route, Routes,Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
        <BrowserRouter >
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Switch>
          <Routes>
          <Route path ="/" element={< Home/>} />
          <Route path="/about" element={<About/>} />
          </Routes>
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
