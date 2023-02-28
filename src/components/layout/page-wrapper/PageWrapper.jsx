import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import styled from 'styled-components';

const StyledMain = styled.main`
  width: 1280px;
  margin: 0 auto;
`;

const PageWrapper = () => {
  return (
    <>
      <Header />
      <StyledMain>main styled</StyledMain>
      <Footer />
    </>
  );
};

export default PageWrapper;
