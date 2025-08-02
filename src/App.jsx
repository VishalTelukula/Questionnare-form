// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import DateInput from './components/DateInput';
import SelectInput from './components/SelectInput';
import MobileInput from './components/MobileInput';


const countryOptions = [
  { name: 'India', code: 'IN' },
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' }
];

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    dob: '',
    country: '',mobile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload

  // Validate fields
  const { fullName, age, dob, country, mobile } = formData;

  if (!fullName.trim()) {
    alert("Full Name is required.");
    return;
  }

  const ageNum = Number(age);
  if (!ageNum || ageNum < 1 || ageNum > 120) {
    alert("Please enter a valid age between 1 and 120.");
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();
  if (dobDate >= today) {
    alert("DOB must be in the past.");
    return;
  }

  if (!country) {
    alert("Please select a country.");
    return;
  }

  if (!mobile || !/^\d{10,13}$/.test(mobile)) {
    alert("Enter a valid mobile number with 10 to 13 digits.");
    return;
  }

  // If all validations pass
  alert("Form submitted successfully!");
  console.log("Form Data:", formData);
};
  return (
  <div className="app-container">
    <h1>Questionnaire Form</h1>
    <form className="form-container" onSubmit={handleSubmit}>
      <TextInput
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />
      <NumberInput
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter your age"
        required
        min={1}
        max={120}
      />
      <DateInput
        label="Date of Birth"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <SelectInput
        label="Location"
        name="country"
        value={formData.country}
        onChange={handleChange}
        options={countryOptions}
        required
      />
      <MobileInput
        label="Mobile Number"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
        minLength={10}
        maxLength={13}
      />
      <NumberInput
  label="Mobile Number"
  name="mobile"
  value={formData.mobile}
  onChange={handleChange}
  placeholder="Enter your mobile number"
  required
/>
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default App;
