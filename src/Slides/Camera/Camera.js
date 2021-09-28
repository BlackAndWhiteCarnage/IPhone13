import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import { templateAnim, letterAnim } from 'Assets/Animations/animations';
import { useScroll } from 'Helpers/useScroll';
import { Wrapper, Part, Letter } from './Camera.styles';

const Camera = ({ setSectionIndex }) => {
  const [element, controls] = useScroll();

  return (
    <SectionWrapper setSectionIndex={setSectionIndex} index={2}>
      <Wrapper variants={templateAnim} animate={controls} initial='hidden' ref={element}></Wrapper>
    </SectionWrapper>
  );
};

export default Camera;
