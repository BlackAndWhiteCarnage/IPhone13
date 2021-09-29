import React from 'react';
// STYLES
import { Wrapper } from './CanvasAndHeadersWrapper.styles';

const CanvasAndHeadersWrapper = ({ children, sectionIndex }) => {
  const returnClassHandler = () => {
    if (sectionIndex === 1) {
      return 'display';
    } else if (sectionIndex === 2) {
      return 'camera';
    } else if (sectionIndex === 3) {
      return 'battery';
    }
  };

  return <Wrapper className={returnClassHandler()}>{children}</Wrapper>;
};

export default CanvasAndHeadersWrapper;
