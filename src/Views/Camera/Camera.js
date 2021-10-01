import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import CameraHeroImage from 'Components/CameraHeroImage/CameraHeroImage';
import CameraDescription from 'Components/CameraDescription/CameraDescription';
import CameraImages from 'Components/CameraImages/CameraImages';
// STYLES
import { Wrapper } from './Camera.styles';

const Camera = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={2} />
      <CameraHeroImage />
      <ContentSection className='noMargin'>
        <Wrapper>
          <CameraDescription />
          <CameraImages />
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Camera;
