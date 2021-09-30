// IMAGES
import image3 from 'Assets/Images/IphoneImages/3.jpg';
import image4 from 'Assets/Images/IphoneImages/4.jpg';
import image5 from 'Assets/Images/IphoneImages/5.jpg';
import image6 from 'Assets/Images/IphoneImages/6.jpg';
import image7 from 'Assets/Images/IphoneImages/7.jpg';
// STYLES
import { ImageWrapper, Image, InfoWrapper, Info } from 'Views/Home/Home.styles';

const OtherIphoneImages = () => (
  <>
    <ImageWrapper className='bottom'>
      <Image src={image3} />
    </ImageWrapper>
    <ImageWrapper className='white'>
      <Image src={image4} />
      <InfoWrapper>
        <Info className='active'>Surgical-grade stainless steel</Info>
      </InfoWrapper>
    </ImageWrapper>
    <ImageWrapper className='white'>
      <Image src={image5} />
      <InfoWrapper>
        <Info className='active'>Ceramic Shield, tougher than any smartphone glass</Info>
      </InfoWrapper>
    </ImageWrapper>
    <ImageWrapper className='bottom'>
      <Image src={image6} />
    </ImageWrapper>
    <ImageWrapper className='white bottom pureWhite'>
      <Image src={image7} />
    </ImageWrapper>
  </>
);

export default OtherIphoneImages;
