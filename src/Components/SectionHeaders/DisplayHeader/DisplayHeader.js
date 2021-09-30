import React from 'react';
// STYLES
import { Wrapper } from './DisplayHeader.styles';
// HELPERS
import { convertToArrayHandler } from 'Helpers/convertToArray';

const DisplayHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 1 && 'show'}>{convertToArrayHandler('display')}</Wrapper>;
};

export default DisplayHeader;
