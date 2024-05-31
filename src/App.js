// ./src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './css/animations.css'
import Maps from './pages/Maps';
import Experiences from './pages/Experiences';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/maps" element={<Maps/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Contact/>} />
          <Route path="/ragister" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
