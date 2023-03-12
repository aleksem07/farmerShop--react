import React from 'react';
import './style.css';

export const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small',
  EXTRA_SMALL: 'extra_small',
};

const Title = ({ children, size }) => {
  return <h1 className={`title${size ? ` title_${size}` : ''}`}>{children}</h1>;
};

export default Title;
