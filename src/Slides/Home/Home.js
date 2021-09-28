import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Home.styles';

const Home = ({ setSectionIndex, sectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={0}>
        <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}></Wrapper>
      </SectionWrapper>
    </>
  );
};

export default Home;
