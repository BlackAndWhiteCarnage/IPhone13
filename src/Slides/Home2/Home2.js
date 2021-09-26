import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Home2.styles';

const Home = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={1}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        <Part className='right'>
          <Letter variants={letterAnim}>D</Letter>
          <Letter variants={letterAnim}>U</Letter>
        </Part>
        <Part className='left'>
          <Letter variants={letterAnim}>P</Letter>
          <Letter variants={letterAnim}>A</Letter>
        </Part>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Home;
