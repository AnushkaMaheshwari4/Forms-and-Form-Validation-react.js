// src/Success.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    return (
      <div className="container">
        <h2>No data submitted!</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Registration Successful! 🎉</h2>
      <p>Here’s the data you submitted:</p>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Register Again</button>
    </div>
  );
}
export default Success;
