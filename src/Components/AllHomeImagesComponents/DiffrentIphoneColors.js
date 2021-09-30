// IMAGES
import iphoneBlue from 'Assets/Images/IphoneImages/iphoneBlue.jpg';
import iphoneWhite from 'Assets/Images/IphoneImages/iphoneWhite.jpg';
import iphoneGold from 'Assets/Images/IphoneImages/iphoneGold.jpg';
import iphoneGray from 'Assets/Images/IphoneImages/iphoneGray.jpg';
// STYLES
import { ImageWrapper, Image, ColorControls, Color, ColorNamesWrapper, InfoWrapper, Info } from 'Views/Home/Home.styles';

const DiffrentIphoneColors = ({ current, setCurrent }) => {
  const setCurrentHandler = (num) => {
    setCurrent(num);
  };

  return (
    <ImageWrapper className='white'>
      <Image src={iphoneBlue} className={`${current === 0 && 'show'} absolute`} />
      <Image src={iphoneWhite} className={`${current === 1 && 'show'} absolute`} />
      <Image src={iphoneGold} className={`${current === 2 && 'show'} absolute`} />
      <Image src={iphoneGray} className={`${current === 3 && 'show'} absolute`} />
      <InfoWrapper>
        <ColorControls>
          <Color className={`${current === 0 && 'active'} blue`} onClick={() => setCurrentHandler(0)} />
          <Color className={`${current === 1 && 'active'} white`} onClick={() => setCurrentHandler(1)} />
          <Color className={`${current === 2 && 'active'} gold`} onClick={() => setCurrentHandler(2)} />
          <Color className={`${current === 3 && 'active'} gray`} onClick={() => setCurrentHandler(3)} />
        </ColorControls>
        <ColorNamesWrapper>
          <Info className={current === 0 && 'active'}>Sierra Blue,</Info>
          <Info className={current === 1 && 'active'}>Silver,</Info>
          <Info className={current === 2 && 'active'}>Gold</Info>
          <Info>and</Info>
          <Info className={current === 3 && 'active'}>Graphite</Info>
        </ColorNamesWrapper>
      </InfoWrapper>
    </ImageWrapper>
  );
};

export default DiffrentIphoneColors;
