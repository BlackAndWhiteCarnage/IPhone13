import React from 'react';
// STYLES
import { Wrapper, HeaderWrapper, Header, InfoWrapper, Info, ChargeInfo } from './BatteryDescription.styles';

const BatteryDescription = () => (
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
);

export default BatteryDescription;
