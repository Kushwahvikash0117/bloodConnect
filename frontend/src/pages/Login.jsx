import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-center text-red-600 mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Login</button>
    </form>
  );
};

export default Login;
