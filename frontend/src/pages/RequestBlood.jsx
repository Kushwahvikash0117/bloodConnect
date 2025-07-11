import React, { useState } from 'react';
import axios from 'axios';

const RequestBlood = () => {
  const [form, setForm] = useState({ name: '', requiredBlood: '', location: '', urgency: '', contact: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/request', form, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      alert('Blood request submitted');
    } catch {
      alert('Error submitting request');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-center text-red-600 mb-4">Request Blood</h2>
      <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
      <input type="text" placeholder="Required Blood Type" value={form.requiredBlood} onChange={(e) => setForm({ ...form, requiredBlood: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
      <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
      <input type="text" placeholder="Urgency Level" value={form.urgency} onChange={(e) => setForm({ ...form, urgency: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
      <input type="text" placeholder="Contact Info" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
      <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Submit</button>
    </form>
  );
};

export default RequestBlood;
