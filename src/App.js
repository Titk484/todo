import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav_Components/Navbar.js';
import './App.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import About from './pages/About.js';
// import backgroundvt from './image/Vutru.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <img src={backgroundvt} alt="background" /> */}
        <Routes>
          {/* <Route exact path="/" img src={backgroundvt} alt="background" /> */}
          <Route exact path="/todo" element={<Home />} />
          {/* <Route exact path="/reports" element={<Reports />} /> */}
          <Route exact path="/about-me" element={<About />} />
          <Route exact path="/timelines" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
