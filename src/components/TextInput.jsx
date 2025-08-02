// src/components/TextInput.jsx
import React from 'react';

const TextInput = ({ label, name, value, onChange, placeholder, required }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextInput;
