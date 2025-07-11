import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({ email: '', password: '', role: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', form);
            alert(res.data.message);
        } catch {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-center text-red-600 mb-4">Register</h2>
            <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
            <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full p-2 mb-3 border rounded" required />
            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full p-2 mb-3 border rounded" required>
                <option value="">Select Role</option>
                <option value="hospital">Hospital</option>
                <option value="doctor">Doctor</option>
                <option value="person">Person</option>
            </select>
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Register</button>
        </form>
    );
};

export default Register;