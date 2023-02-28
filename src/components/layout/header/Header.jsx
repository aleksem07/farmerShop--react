import React from 'react';
import Button from '../../ui/button/Button';
import Logo from '../../ui/logo/Logo';

import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Button>Купить</Button>
    </header>
  );
};

export default Header;
