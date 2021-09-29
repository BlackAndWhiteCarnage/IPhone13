import React from 'react';
// STYLES
import { Wrapper } from './BatteryHeader.styles';

const BatteryHeader = ({ sectionIndex }) => {
  return <Wrapper className={sectionIndex === 3 && 'show'}></Wrapper>;
};

export default BatteryHeader;
