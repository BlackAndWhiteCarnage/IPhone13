import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';

const Battery = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={3} />
      <ContentSection />
    </>
  );
};

export default Battery;
