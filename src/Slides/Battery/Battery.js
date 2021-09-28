import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Battery.styles';

const Battery = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={3}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        {/* <Part className='right'>
          <Letter variants={letterAnim}>b</Letter>
          <Letter variants={letterAnim}>a</Letter>
          <Letter variants={letterAnim}>t</Letter>
          <Letter variants={letterAnim}>t</Letter>
          <Letter variants={letterAnim}>e</Letter>
          <Letter variants={letterAnim}>r</Letter>
          <Letter variants={letterAnim}>y</Letter>
        </Part> */}
      </Wrapper>
    </SectionWrapper>
  );
};

export default Battery;
