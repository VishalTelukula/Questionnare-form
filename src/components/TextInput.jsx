// src/components/TextInput.jsx
import React from 'react';

function TextInput({ label, name, value, onChange, placeholder, required }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '2rem', // Adjust spacing between label and input
      }}
    >
      <label
        htmlFor={name}
        style={{
          width: '120px', // Fixed width for alignment
          textAlign: 'right',
          fontWeight: 'bold',
        }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>

      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          flex: 1,
        }}
      />
    </div>
  );
}

export default TextInput;
