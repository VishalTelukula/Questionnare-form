import React from 'react';

function DateInput({ label, name, value, onChange, required }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '2rem',
      }}
    >
      <label
        htmlFor={name}
        style={{
          width: '120px',
          textAlign: 'right',
          fontWeight: 'bold',
        }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>

      <input
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
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

export default DateInput;
