import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-inline: 7%;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
