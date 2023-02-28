import React from 'react';
import farmer from '../../../assets/farmer.svg';

import styled from 'styled-components';

const Link = styled.a`
  margin-left: 90px;
  display: flex;
  gap: 1.5em;
  align-items: center;
  text-decoration: none;
`;

const Text = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  color: #333;
`;

const Logo = () => {
  return (
    <>
      <Link href='/'>
        <img src={farmer} alt='логотип' />
        <Text>Фермерские продукты</Text>
      </Link>
    </>
  );
};

export default Logo;
