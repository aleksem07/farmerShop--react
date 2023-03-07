import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import styled from 'styled-components';
import Wrapper from '../wrapper/Wrapper';

const StyledMain = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const PageWrapper = () => {
  return (
    <>
      <Header />

      <StyledMain>
        <Wrapper>wrapper</Wrapper>
      </StyledMain>
      <Footer />
    </>
  );
};

export default PageWrapper;
