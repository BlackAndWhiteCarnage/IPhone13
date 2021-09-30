import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import DisplayInfo from 'Components/DisplayInfo/DisplayInfo';
// IMAGES
import iphoneDisplay from 'Assets/Images/IphoneImages/iphoneDisplay.jpg';
import iphoneDisplay2 from 'Assets/Images/IphoneImages/iphoneDisplay2.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  @media screen and (max-width: 1000px) {
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

const ProMotionWrapper = styled.div`
  width: 100vw;
  height: 1600px;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  background: #fbfbfd;
`;

const ProMotionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  z-index: 1;
  width: 50%;
  margin-bottom: 100px;
  strong {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  @media screen and (max-width: 1366px) {
    width: 80%;
    margin-bottom: 0;
  }
`;

const ProMotionText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  flex-wrap: wrap;
  height: 350px;
  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;

const Part = styled.article`
  width: 45%;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const ProMotionImage = styled.img`
  width: 1200px;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const Display = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={1} />
      <ContentSection>
        <Wrapper>
          <IphoneImage src={iphoneDisplay} />
          <DisplayInfo />
          <ProMotionWrapper>
            <ProMotionHeader>
              <strong>Hello, ProMotion.</strong>
              <br />
              <span>
                Meet the 120Hz adaptive refresh display
                <br /> that changes the game.
              </span>
            </ProMotionHeader>
            <ProMotionText>
              <Part>
                The new Super Retina XDR display with ProMotion can refresh from 10 to 120 times per second, and all kinds of frame rates in between.
                It intelligently ramps up when you need exceptional graphics performance, and ramps down to save power when you don’t. It even
                accelerates and decelerates naturally to match the speed of your finger as you scroll. You’ve never felt anything like it.
              </Part>
              <Part>iOS 15 is optimized for ProMotion, so the things you do every day feel phenomenally fluid</Part>
            </ProMotionText>
            <ProMotionImage src={iphoneDisplay2} />
          </ProMotionWrapper>
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Display;
