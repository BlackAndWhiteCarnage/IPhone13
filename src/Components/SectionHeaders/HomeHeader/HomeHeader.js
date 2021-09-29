import React from 'react';
// STYLES
import { Wrapper } from './HomeHeader.styles';

const HomeHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 0 && 'show'}></Wrapper>;
};

export default HomeHeader;
