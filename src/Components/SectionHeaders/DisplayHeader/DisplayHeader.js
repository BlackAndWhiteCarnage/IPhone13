import React from 'react';
// STYLES
import { Wrapper } from './DisplayHeader.styles';

const DisplayHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 1 && 'show'}></Wrapper>;
};

export default DisplayHeader;
