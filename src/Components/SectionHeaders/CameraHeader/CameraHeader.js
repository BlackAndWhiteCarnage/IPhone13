import React from 'react';
// STYLES
import { Wrapper } from './CameraHeader.styles';

const CameraHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 2 && 'show'}></Wrapper>;
};

export default CameraHeader;
