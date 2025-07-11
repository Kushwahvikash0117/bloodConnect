import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [raisedHands, setRaisedHands] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const donors = await axios.get('http://localhost:5000/api/search');
      const reqs = await axios.get('http://localhost:5000/api/request');
      setRaisedHands(donors.data);
      setRequests(reqs.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-red-700 mb-4">🩸 Available Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {raisedHands.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Blood Type:</strong> {item.bloodType}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-red-700 mb-4">🚑 Blood Requests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {requests.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Required:</strong> {item.requiredBlood}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Urgency:</strong> {item.urgency}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
