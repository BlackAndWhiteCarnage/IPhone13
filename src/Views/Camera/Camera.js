import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';

const Camera = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={2} />
      <ContentSection />
    </>
  );
};

export default Camera;
