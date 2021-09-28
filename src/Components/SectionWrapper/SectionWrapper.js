import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionWrapper = ({ children, setSectionIndex, index, className }) => {
  const [elem, view] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (view) {
      setSectionIndex(index);
    }
  }, [view]);

  return (
    <Wrapper ref={elem} className={className}>
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
