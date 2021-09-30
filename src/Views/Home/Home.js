import React, { useState } from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import DiffrentIphoneColorsCamera from 'Components/AllHomeImagesComponents/DiffrentIphoneColorsCamera';
import DiffrentIphoneColors from 'Components/AllHomeImagesComponents/DiffrentIphoneColors';
import OtherIphoneImages from 'Components/AllHomeImagesComponents/OtherIphoneImages';
// STYLES
import { Wrapper } from './Home.styles';

const Home = ({ setSectionIndex }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={0} />
      <ContentSection>
        <Wrapper>
          <DiffrentIphoneColors current={current} setCurrent={setCurrent} />
          <DiffrentIphoneColorsCamera current={current} />
          <OtherIphoneImages />
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Home;
