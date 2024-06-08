// ./src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './css/animations.css'
import Booking from './pages/Booking';
import Experiences from './pages/Experiences';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default App;
