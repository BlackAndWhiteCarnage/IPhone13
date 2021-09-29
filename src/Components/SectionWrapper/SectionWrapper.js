import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Wrapper } from './SectionWrapper.styles';

const SectionWrapper = ({ children, setSectionIndex, index, className }) => {
  const [elem, view] = useInView({ threshold: 0.5 });

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
