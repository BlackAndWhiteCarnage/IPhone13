import React from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const HeaderWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Header = styled.p`
  width: 100%;
  margin-bottom: 25px;
  span {
    color: #03a10e;
  }
  &.m {
    font-size: ${({ theme }) => theme.fontSize.m};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  &.xxl {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  width: 50%;
  height: auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
    border-bottom: 2px solid #bdbdbe;
    margin-bottom: 25px;
  }
`;

const ChargeInfo = styled.div`
  width: 100%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Battery = ({ setSectionIndex }) => {
  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={3} />
      <ContentSection className='smaller'>
        <Wrapper>
          <HeaderWrapper>
            <Header className='xl'>iPhone 13 Pro Max has</Header>
            <Header className='xxl'>
              the best <br />
              <span>battery</span> life
              <br /> ever on <br />
              iPhone.
            </Header>
          </HeaderWrapper>
          <InfoWrapper>
            <Info>
              <Header className='m'>Up to</Header>
              <Header className='xl'>2.5 more hours</Header>
              <Header className='m'>of battery life on iPhone 13 Pro Max</Header>
            </Info>
            <Info>
              <Header className='m'>Up to</Header>
              <Header className='xl'>1.5 more hours</Header>
              <Header className='m'>of battery life on iPhone 13 Pro</Header>
            </Info>
          </InfoWrapper>
          <ChargeInfo>Add a MagSafe charger for faster wireless charging.</ChargeInfo>
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Battery;
