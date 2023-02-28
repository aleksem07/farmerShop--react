import React from 'react';
import Logo from '../../ui/logo/Logo';

import './style.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />
      <span className='footer__copyright'>Создано в 2021</span>
    </footer>
  );
};

export default Footer;
