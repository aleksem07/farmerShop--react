import React from 'react';
import Logo from '/src/components/ui/logo/Logo';

import styled from 'styled-components';


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  min-height: 80px;
  margin-inline: auto;
  margin-top: auto;
  align-items: center;
`;

const Copyright = styled.span`
  align-self: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 150%;
  color: #333;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано в 2021</Copyright>
    </StyledFooter>
  );
};

export default Footer;
