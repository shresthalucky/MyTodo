import React from 'react';

function Button({type, loading, disabled, clickHandler, children}) {
  return(
    <button type={type} onClick={clickHandler} disabled={disabled}>{children}</button>
  );
}

export default Button;
