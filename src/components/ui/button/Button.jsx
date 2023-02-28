import React from 'react';

import styled from 'styled-components';

const SryledButton = styled.button`
  margin-right: 90px;
  border: none;
  width: 20%;
  min-height: 60px;
  cursor: pointer;
  background-color: #fc9b27;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #fff;
`;

const Button = ({ children }) => {
  return <SryledButton type='button'>{children}</SryledButton>;
};

export default Button;
