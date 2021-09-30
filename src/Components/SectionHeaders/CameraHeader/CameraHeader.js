import React from 'react';
// STYLES
import { Wrapper } from './CameraHeader.styles';
// HELPERS
import { convertToArrayHandler } from 'Helpers/convertToArray';

const CameraHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 2 && 'show'}>{convertToArrayHandler('Camera')}</Wrapper>;
};

export default CameraHeader;
