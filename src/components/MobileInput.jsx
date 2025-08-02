// src/components/MobileInput.jsx
import React from 'react';

const MobileInput = ({ label, name, value, onChange, required, minLength, maxLength }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}{required && ' *'}</label>
      <input
        type="tel"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern="[0-9]+"
        placeholder="Include country code. E.g., +91XXXXXXXXXX"
      />
    </div>
  );
};

export default MobileInput;
