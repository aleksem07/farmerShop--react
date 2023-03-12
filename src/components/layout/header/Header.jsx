import React from 'react';
import Logo from '/src/components/ui/logo/Logo';
import Nav from '../nav/Nav';

import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0 90px;
  max-width: 1280px;
  width: 100%;
  min-height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);

  z-index: 5;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
