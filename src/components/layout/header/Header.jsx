import React from 'react';
import Button from '../../ui/button/Button';
import Logo from '../../ui/logo/Logo';

import styled from 'styled-components';
import Wrapper from '../wrapper/Wrapper';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1280px;
  min-height: 80px;
  margin: 0 auto;
`;

const GreenButton = styled(Button)`
  background-color: Green;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Button>Купить</Button>
        <GreenButton>Green</GreenButton>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
