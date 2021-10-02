import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import DisplayInfo from 'Components/DisplayInfo/DisplayInfo';
import DisplayDescription from 'Components/DisplayDescription/DisplayDescription';
// IMAGES
import iphoneDisplay from 'Assets/Images/IphoneImages/iphoneDisplay.jpg';
// STYLES
import { Wrapper, IphoneImage } from './Display.styles';

const Display = ({ setSectionIndex }) => (
  <>
    <SectionWrapper setSectionIndex={setSectionIndex} index={1} />
    <ContentSection>
      <Wrapper>
        <IphoneImage src={iphoneDisplay} />
        <DisplayInfo />
        <DisplayDescription />
      </Wrapper>
    </ContentSection>
  </>
);

export default Display;
