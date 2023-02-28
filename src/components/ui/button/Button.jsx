import React from 'react';

import './style.css';

const Button = ({ children }) => {
  return (
    <button className='button' type='button'>
      {children}
    </button>
  );
};

export default Button;
