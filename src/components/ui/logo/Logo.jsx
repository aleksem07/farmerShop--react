import React from 'react';
import farmer from '../../../assets/farmer.svg';

import './style.css';

const Logo = () => {
  return (
    <a href='/' className='logo__link'>
      <img src={farmer} alt='логотип' />
      <span className='logo__text'>Фермерские продукты</span>
    </a>
  );
};

export default Logo;
