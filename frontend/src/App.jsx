import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RaiseHand from './pages/RaiseHand';
import RequestBlood from './pages/RequestBlood';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/raise-hand" element={<RaiseHand />} />
          <Route path="/request-blood" element={<RequestBlood />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;