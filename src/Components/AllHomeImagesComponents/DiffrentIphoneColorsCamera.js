// IMAGES
import iphoneCameraBlue from 'Assets/Images/IphoneImages/iphoneCameraBlue.jpg';
import iphoneCameraWhite from 'Assets/Images/IphoneImages/iphoneCameraWhite.jpg';
import iphoneCameraGold from 'Assets/Images/IphoneImages/iphoneCameraGold.jpg';
import iphoneCameraGray from 'Assets/Images/IphoneImages/iphoneCameraGray.jpg';
// STYLES
import { ImageWrapper, Image } from 'Views/Home/Home.styles';

const DiffrentIphoneColorsCamera = ({ current }) => (
  <ImageWrapper className='bottom'>
    <Image src={iphoneCameraBlue} className={`${current === 0 && 'active'} notActive`} />
    <Image src={iphoneCameraWhite} className={`${current === 1 && 'active'} notActive`} />
    <Image src={iphoneCameraGold} className={`${current === 2 && 'active'} notActive`} />
    <Image src={iphoneCameraGray} className={`${current === 3 && 'active'} notActive`} />
  </ImageWrapper>
);

export default DiffrentIphoneColorsCamera;
