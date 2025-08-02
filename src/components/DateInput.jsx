// src/components/DateInput.jsx
import React from 'react';

const DateInput = ({ label, name, value, onChange, required }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default DateInput;
