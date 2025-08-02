// src/components/SelectInput.jsx
import React from 'react';

const SelectInput = ({ label, name, value, onChange, options, required }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">-- Select Country --</option>
        {options.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
    