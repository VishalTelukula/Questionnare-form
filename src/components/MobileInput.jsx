import React from 'react';

const MobileInput = ({ label, name, value, onChange, prefix, required }) => {
  return (
    <div
      className="form-group"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '1rem'
      }}
    >
      {/* Right-aligned label */}
      <label
        htmlFor={name}
        style={{
          width: '100px',
          textAlign: 'right',
          fontWeight: 'bold'
        }}
      >
        {label}:{required && <span style={{ color: 'red' }}>*</span>}
      </label>

      {/* Prefix + Input */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span
          style={{
            padding: '0.4rem 0.6rem',
            backgroundColor: '#eee',
            borderRadius: '5px',
            color: 'black',
            fontWeight: 500
          }}
        >
          {prefix}
        </span>
        <input
          type="tel"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern="\d{10,13}"
          placeholder="Enter mobile number"
          style={{
            padding: '0.4rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '200px'
          }}
        />
      </div>
    </div>
  );
};

export default MobileInput;
