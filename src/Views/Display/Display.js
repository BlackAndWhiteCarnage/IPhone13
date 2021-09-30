import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';

const Display = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={1} />
      <ContentSection />
    </>
  );
};

export default Display;
