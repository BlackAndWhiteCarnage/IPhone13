import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import BatteryDescription from 'Components/BatteryDescription/BatteryDescription';

const Battery = ({ setSectionIndex }) => (
  <>
    <SectionWrapper setSectionIndex={setSectionIndex} index={3} />
    <ContentSection className='battery'>
      <BatteryDescription />
    </ContentSection>
  </>
);

export default Battery;
