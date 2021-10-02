import React from 'react';
// STYLES
import { Wrapper } from './HomeHeader.styles';
// HELPERS
import { convertToArrayHandler } from 'Helpers/convertToArray';

const HomeHeader = ({ sectionIndex }) => <Wrapper className={sectionIndex === 0 && 'show'}>{convertToArrayHandler('13')}</Wrapper>;

export default HomeHeader;
