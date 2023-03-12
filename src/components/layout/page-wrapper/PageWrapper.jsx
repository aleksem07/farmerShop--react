import React from 'react';
import Header from '/src/components/layout/header/Header';
import Footer from '/src/components/layout/footer/Footer';
import MainPage from '../main-page/MainPage';

import styled from 'styled-components';

const StyledMain = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const PageWrapper = ({ advList }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <MainPage advList={advList} />
      </StyledMain>
      <Footer />
    </>
  );
};

export default PageWrapper;
