import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  const inputClasses = [
    'input',
    error ? 'input--error' : '',
    disabled ? 'input--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;