import React from 'react';
// STYLES
import { Wrapper } from './BatteryHeader.styles';
// HELPERS
import { convertToArrayHandler } from 'Helpers/convertToArray';

const BatteryHeader = ({ sectionIndex }) => <Wrapper className={sectionIndex === 3 && 'show'}>{convertToArrayHandler('Battery')}</Wrapper>;

export default BatteryHeader;
