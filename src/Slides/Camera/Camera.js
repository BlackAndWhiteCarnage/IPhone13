import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Camera.styles';

const Camera = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={2}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        <Part className='right'>
          <Letter variants={letterAnim}>c</Letter>
          <Letter variants={letterAnim}>a</Letter>
          <Letter variants={letterAnim}>m</Letter>
          <Letter variants={letterAnim}>e</Letter>
          <Letter variants={letterAnim}>r</Letter>
          <Letter variants={letterAnim}>a</Letter>
        </Part>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Camera;
