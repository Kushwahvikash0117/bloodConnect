import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const api = await axios.get('http://localhost:5000/api/auth/logout', { withCredentials: true });
    localStorage.removeItem('token');
    navigate('/login');
    console.log(api)
  };

  return (
    <nav className="bg-red-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">🩸 BloodConnect</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/raise-hand" className="hover:underline">Raise Hand</Link>
        <Link to="/request-blood" className="hover:underline">Request</Link>
        <button onClick={handleLogout} className="hover:underline">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
