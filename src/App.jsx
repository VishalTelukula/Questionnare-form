// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import DateInput from './components/DateInput';
import SelectInput from './components/SelectInput';
import MobileInput from './components/MobileInput';

const countryOptions = [
  { label: "India", value: "India", code: "+91" },
  { label: "United States", value: "United States", code: "+1" },
  { label: "United Kingdom", value: "United Kingdom", code: "+44" },
  { label: "Canada", value: "Canada", code: "+1" },
  { label: "Australia", value: "Australia", code: "+61" },
  { label: "Germany", value: "Germany", code: "+49" },
  { label: "France", value: "France", code: "+33" },
  { label: "Singapore", value: "Singapore", code: "+65" },
  { label: "Japan", value: "Japan", code: "+81" },
  { label: "South Korea", value: "South Korea", code: "+82" },
  { label: "UAE", value: "UAE", code: "+971" },
  { label: "China", value: "China", code: "+86" },
  { label: "Brazil", value: "Brazil", code: "+55" },
  { label: "South Africa", value: "South Africa", code: "+27" },
  { label: "Russia", value: "Russia", code: "+7" },
];

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    dob: '',
    country: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCountryCode = () => {
    const selected = countryOptions.find(
      (country) => country.value === formData.country
    );
    return selected ? selected.code : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const countryCode = getCountryCode();
    const fullMobile = `${countryCode} ${mobile}`;

    alert("Form submitted successfully!");
    console.log("Form Data:", { ...formData, mobile: fullMobile });
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
        <TextInput
  label="Age"
  name="age"
  value={formData.age}
  onChange={handleChange}
  placeholder="Enter your age"
  required
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
          prefix={getCountryCode()}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
