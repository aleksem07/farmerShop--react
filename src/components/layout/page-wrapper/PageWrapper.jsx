import React from 'react';
import Header from '/src/components/layout/header/Header';
import Footer from '/src/components/layout/footer/Footer';

import styled from 'styled-components';

import MainPage from '../main-page/MainPage';

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
        <MainPage />
      </StyledMain>
      <Footer />
    </>
  );
};

export default PageWrapper;
