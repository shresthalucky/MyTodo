import React from 'react';

function Input({ type, name, value, changeHandler, placeholder }) {
  return (
    <input
      className="input input--primary"
      type={type}
      name={name}
      value={value}
      onChange={changeHandler}
      placeholder={placeholder} />
  );
}

export default Input;
