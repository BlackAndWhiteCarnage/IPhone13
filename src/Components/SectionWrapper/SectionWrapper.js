import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionWrapper = ({ children, setSectionIndex, index }) => {
  const [elem, view] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (view) {
      setSectionIndex(index);
    }
  }, [view]);

  return <Wrapper ref={elem}>{children}</Wrapper>;
};

export default SectionWrapper;
