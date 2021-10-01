import React from 'react';
// STYLES
import { Wrapper, Header, Part, HeroImage } from './CameraHeroImage.styles';
// IMAGES
import iphoneCamera from 'Assets/Images/IphoneImages/iphoneCamera.jpg';

const CameraHeroImage = () => (
  <Wrapper>
    <Header>
      <Part className='right'>A snap­shot</Part>
      <Part>of each</Part>
      <Part className='center'>cam­era.</Part>
    </Header>
    <HeroImage src={iphoneCamera} />
  </Wrapper>
);

export default CameraHeroImage;
