// src/components/SelectInput.jsx
import React from 'react';

function SelectInput({ label, name, value, onChange, options, required }) {
  return (
    <div className="form-group">
      <label style={{ fontWeight: 'bold' }}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="">-- Select a country --</option>
        {options.map((option, index) => (
          <option key={index} value={option.value} > 
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
