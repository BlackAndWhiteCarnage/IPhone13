import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Display.styles';

const Display = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={1}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        <Part className='right'>
          <Letter variants={letterAnim}>d</Letter>
          <Letter variants={letterAnim}>i</Letter>
          <Letter variants={letterAnim}>s</Letter>
          <Letter variants={letterAnim}>p</Letter>
          <Letter variants={letterAnim}>l</Letter>
          <Letter variants={letterAnim}>a</Letter>
          <Letter variants={letterAnim}>y</Letter>
        </Part>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Display;
