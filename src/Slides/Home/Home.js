import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Home.styles';

const Home = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={0}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}>
        <Part className='right'>
          <Letter variants={letterAnim}>1</Letter>
          <Letter variants={letterAnim}>3</Letter>
        </Part>
        <Part className='left'>
          <Letter variants={letterAnim}>P</Letter>
          <Letter variants={letterAnim}>r</Letter>
          <Letter variants={letterAnim}>o</Letter>
        </Part>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Home;
