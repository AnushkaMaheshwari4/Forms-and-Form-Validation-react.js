// src/App.js
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Success from "./Success";
import "./App.css";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Country and city options for dropdowns
  const countryCity = {
    India: ["Delhi", "Mumbai", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
    UK: ["London", "Manchester", "Liverpool"],
  };

  // Regex patterns for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format example
  const aadharPattern = /^[0-9]{12}$/; // 12 digits Aadhar
  const phonePattern = /^[0-9]{10}$/; // 10 digits phone number (w/o country code)

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required";
    if (!formData.username.trim()) tempErrors.username = "Username is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email)) tempErrors.email = "Invalid email format";

    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!phonePattern.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits";

    if (!formData.country) tempErrors.country = "Country is required";
    if (!formData.city) tempErrors.city = "City is required";

    if (!formData.pan.trim()) tempErrors.pan = "PAN Number is required";
    else if (!panPattern.test(formData.pan)) tempErrors.pan = "Invalid PAN format";

    if (!formData.aadhar.trim()) tempErrors.aadhar = "Aadhar Number is required";
    else if (!aadharPattern.test(formData.aadhar)) tempErrors.aadhar = "Invalid Aadhar format";

    setErrors(tempErrors);

    // If no errors, return true
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // On successful validation, navigate to Success page and pass data via state
      navigate("/success", { state: formData });
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name:</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div>
          <label>Username:</label>
          <input name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-hide-btn"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label>Phone Number (without country code):</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {Object.keys(countryCity).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        <div>
          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {formData.country &&
              countryCity[formData.country].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div>
          <label>PAN Number:</label>
          <input name="pan" value={formData.pan.toUpperCase()} onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})} maxLength={10} />
          {errors.pan && <p className="error">{errors.pan}</p>}
        </div>

        <div>
          <label>Aadhar Number:</label>
          <input name="aadhar" value={formData.aadhar} onChange={handleChange} maxLength={12} />
          {errors.aadhar && <p className="error">{errors.aadhar}</p>}
        </div>

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
  );
}

export default App;
