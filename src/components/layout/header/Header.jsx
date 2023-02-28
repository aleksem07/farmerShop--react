import React from 'react';
import Button from '../../ui/button/Button';
import Logo from '../../ui/logo/Logo';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1280px;
  min-height: 80px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button>Купить</Button>
    </StyledHeader>
  );
};

export default Header;
