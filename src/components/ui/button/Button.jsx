import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  width: 20%;
  min-height: 60px;
  cursor: pointer;
  background-color: #fc9b27;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 150%;
  color: #fff;
`;

const Button = ({ className, children }) => {
  return (
    <StyledButton className={className} type='button'>
      {children}
    </StyledButton>
  );
};

export default Button;
