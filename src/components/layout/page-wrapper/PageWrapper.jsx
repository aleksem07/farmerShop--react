import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './style.css';

const PageWrapper = () => {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>main</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
