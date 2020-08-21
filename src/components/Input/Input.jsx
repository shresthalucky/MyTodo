import React from 'react';

function Input({ type, name, value, changeHandler, placeholder, required }) {
  return (
    <input
      className="input input--primary"
      type={type}
      name={name}
      value={value}
      onChange={changeHandler}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
