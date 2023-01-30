import './App.css';
import { Home } from './Home';
import { List } from './List';
import { About } from './About';
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/home" element ={<Home />}/>
          <Route path="/list" element ={<List />}/>
          <Route path="/about" element ={<About />}/>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;
