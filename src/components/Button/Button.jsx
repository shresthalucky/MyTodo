import React from 'react';

function Button({ type, disabled, clickHandler, className, icon, children }) {

  return (
    <button
      className={`btn btn--${className ? className : 'primary'}`}
      type={type}
      onClick={clickHandler}
      disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}

export default Button;
