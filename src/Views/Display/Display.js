import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
// IMAGES
import iphoneDisplay from 'Assets/Images/IphoneImages/iphoneDisplay.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    /* padding: 200px 0; */
    min-width: unset;
  }
`;

const IphoneImage = styled.img`
  width: 80%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Info = styled.div`
  min-height: 300px;
  border: 1px solid #bdbdbe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    border-left: none !important;
    border-right: none !important;
  }
  @media screen and (max-width: 680px) {
    padding: 40px 20px;
    min-height: 400px;
  }
  &.bigger {
    width: 60%;
  }
  &.smaller {
    width: 40%;
  }
  &.left {
    text-align: left;
    border-left: none;
  }
  &.right {
    border-right: none;
    text-align: right;
  }
`;

const Text = styled.span`
  width: 100%;
  &.s {
    color: #bdbdbe;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &.m {
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 1000px) {
      /* font-size: ${({ theme }) => theme.fontSize.l}; */
    }
  }
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 1000px) {
      /* font-size: ${({ theme }) => theme.fontSize.xl}; */
    }
  }
`;

const Display = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={1} />
      <ContentSection>
        <Wrapper>
          <IphoneImage src={iphoneDisplay} />
          <InfoWrapper>
            <Info className='bigger left'>
              <Text className='s'>Up to</Text>
              <Text className='xl'>
                25% brighter <br /> outdoors
              </Text>
              <Text className='s'>for content that looks even more vivid in sunlight</Text>
            </Info>
            <Info className='smaller right'>
              <Text className='m'>Custom OLED technology</Text>
              <Text className='s'>pushes the display’s incredible resolution and color right to the edge</Text>
            </Info>
            <Info className='smaller left'>
              <Text className='s'>Up to</Text>
              <Text className='m'>1200 nits</Text>
              <Text className='s'>peak brightness for your HDR photos and videos</Text>
            </Info>
            <Info className='bigger right'>
              <Text className='xl'>
                Even more <br /> display area
              </Text>
              <Text className='s'>thanks to a smaller TrueDepth camera system</Text>
            </Info>
            <Info className='bigger left'>
              <Text className='xl'>
                Incredible <br />
                color fidelity
              </Text>
              <Text className='s'>makes all your content look true to life</Text>
            </Info>
            <Info className='smaller right'>
              <Text className='m'>Striking contrast and resolution</Text>
              <Text className='s'>creates true blacks, bright whites, sharp detail, and crisp text</Text>
            </Info>
          </InfoWrapper>
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Display;
