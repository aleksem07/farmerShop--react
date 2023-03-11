import React from 'react';
import Advantages from '../../blocks/advantages/Advantages';
import About from '/src/components/blocks/about/About';

const MainPage = ({ advList }) => {
  return (
    <>
      <About />
      <Advantages advList={advList} />
    </>
  );
};

export default MainPage;
