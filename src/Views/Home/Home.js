import React, { useState } from 'react';
// COMPONENTS
import ContentSection from 'Components/ContentSection/ContentSection';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper';
// IMAGES
import image2 from 'Assets/Images/IphoneImages/2.jpg';
import image3 from 'Assets/Images/IphoneImages/3.jpg';
import image4 from 'Assets/Images/IphoneImages/4.jpg';
import image5 from 'Assets/Images/IphoneImages/5.jpg';
import image6 from 'Assets/Images/IphoneImages/6.jpg';
import image7 from 'Assets/Images/IphoneImages/7.jpg';
// IPHONE COLORS IMAGES
import iphoneBlue from 'Assets/Images/IphoneImages/iphoneBlue.jpg';
import iphoneWhite from 'Assets/Images/IphoneImages/iphoneWhite.jpg';
import iphoneGold from 'Assets/Images/IphoneImages/iphoneGold.jpg';
import iphoneGray from 'Assets/Images/IphoneImages/iphoneGray.jpg';
// IPHONE COLORS CAMERA IMAGES
import iphoneCameraBlue from 'Assets/Images/IphoneImages/iphoneCameraBlue.jpg';
import iphoneCameraWhite from 'Assets/Images/IphoneImages/iphoneCameraWhite.jpg';
import iphoneCameraGold from 'Assets/Images/IphoneImages/iphoneCameraGold.jpg';
import iphoneCameraGray from 'Assets/Images/IphoneImages/iphoneCameraGray.jpg';
// STYLES
import { Wrapper, ImageWrapper, Image, ColorsWrapper, ColorControls, Color, ColorNamesWrapper, ColorName } from './Home.styles';

const Home = ({ setSectionIndex }) => {
  const [current, setCurrent] = useState(0);

  const setCurrentHandler = (num) => {
    setCurrent(num);
  };

  return (
    <>
      <SectionWrapper setSectionIndex={setSectionIndex} index={0} />
      <ContentSection>
        <Wrapper>
          <ImageWrapper className='white'>
            <Image src={iphoneBlue} className={`${current === 0 && 'show'} absolute`} />
            <Image src={iphoneWhite} className={`${current === 1 && 'show'} absolute`} />
            <Image src={iphoneGold} className={`${current === 2 && 'show'} absolute`} />
            <Image src={iphoneGray} className={`${current === 3 && 'show'} absolute`} />
            <ColorsWrapper>
              <ColorControls>
                <Color className={`${current === 0 && 'active'} blue`} onClick={() => setCurrentHandler(0)} />
                <Color className={`${current === 1 && 'active'} white`} onClick={() => setCurrentHandler(1)} />
                <Color className={`${current === 2 && 'active'} gold`} onClick={() => setCurrentHandler(2)} />
                <Color className={`${current === 3 && 'active'} gray`} onClick={() => setCurrentHandler(3)} />
              </ColorControls>
              <ColorNamesWrapper>
                <ColorName className={current === 0 && 'active'}>Sierra Blue,</ColorName>
                <ColorName className={current === 1 && 'active'}>Silver,</ColorName>
                <ColorName className={current === 2 && 'active'}>Gold</ColorName>
                <ColorName>and</ColorName>
                <ColorName className={current === 3 && 'active'}>Graphite</ColorName>
              </ColorNamesWrapper>
            </ColorsWrapper>
          </ImageWrapper>
          <ImageWrapper className='bottom'>
            <Image src={iphoneCameraBlue} className={`${current === 0 && 'active'} notActive`} />
            <Image src={iphoneCameraWhite} className={`${current === 1 && 'active'} notActive`} />
            <Image src={iphoneCameraGold} className={`${current === 2 && 'active'} notActive`} />
            <Image src={iphoneCameraGray} className={`${current === 3 && 'active'} notActive`} />
          </ImageWrapper>
          <ImageWrapper className='bottom'>
            <Image src={image3} />
          </ImageWrapper>
          <ImageWrapper className='white'>
            <Image src={image4} />
            <ColorsWrapper>
              <ColorName className='active'>Surgical-grade stainless steel</ColorName>
            </ColorsWrapper>
          </ImageWrapper>
          <ImageWrapper className='white'>
            <Image src={image5} />
            <ColorsWrapper>
              <ColorName className='active'>Ceramic Shield, tougher than any smartphone glass</ColorName>
            </ColorsWrapper>
          </ImageWrapper>
          <ImageWrapper className='bottom'>
            <Image src={image6} />
          </ImageWrapper>
          <ImageWrapper className='white bottom'>
            <Image src={image7} />
          </ImageWrapper>
        </Wrapper>
      </ContentSection>
    </>
  );
};

export default Home;
