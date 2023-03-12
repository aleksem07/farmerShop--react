import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/PageWrapper';

import advantagesList from '../../mocks/advantagesList';
import './style.css';

const App = () => {
  return <PageWrapper advList={advantagesList} />;
};

export default App;
