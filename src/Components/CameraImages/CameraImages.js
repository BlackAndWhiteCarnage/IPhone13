import React from 'react';
// IMAGES
import iphoneCameraImage1 from 'Assets/Images/IphoneImages/iphoneCameraImage1.jpg';
import iphoneCameraImage2 from 'Assets/Images/IphoneImages/iphoneCameraImage2.jpg';
import iphoneCameraImage3 from 'Assets/Images/IphoneImages/iphoneCameraImage3.jpg';
// STYLES
import { Wrapper, Image, ImagesWrapper } from './CameraImages.styles';

const CameraImages = () => {
  return (
    <Wrapper>
      <ImagesWrapper>
        <Image src={iphoneCameraImage1} className='leftTop' />
        <Image src={iphoneCameraImage2} className='centerRight' />
        <Image src={iphoneCameraImage3} className='leftBottom' />
      </ImagesWrapper>
    </Wrapper>
  );
};

export default CameraImages;
