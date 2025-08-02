// src/components/NumberInput.jsx
import React from 'react';

const NumberInput = ({ label, name, value, onChange, placeholder, required, min, max }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
};

export default NumberInput;
