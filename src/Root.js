import { useState, useEffect } from 'react';
import { GlobalStyle } from 'Assets/Styles/GlobalStyles';
// COMPONENTS
import CanvasWrapper from 'Components/Canvas/Canvas';
// VIEWS
import Home from 'Views/Home/Home';
import Display from 'Views/Display/Display';
import Camera from 'Views/Camera/Camera';
import Battery from 'Views/Battery/Battery';
// HELPERS
import { matchMedia } from 'Helpers/matchMedia';
import { setIphonePosition, setIphonePositionMobile } from 'Helpers/iphoneAnimations';

function Root() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(sectionIndex);

  useEffect(() => {
    !matchMedia ? setIphonePosition(sectionIndex, prevIndex) : setIphonePositionMobile(sectionIndex, prevIndex);
    setPrevIndex(sectionIndex);
  }, [sectionIndex]);

  return (
    <>
      <GlobalStyle />
      <CanvasWrapper sectionIndex={sectionIndex} prevIndex={prevIndex} />
      <Home setSectionIndex={setSectionIndex} />
      <Display setSectionIndex={setSectionIndex} />
      <Camera setSectionIndex={setSectionIndex} />
      <Battery setSectionIndex={setSectionIndex} />
    </>
  );
}

export default Root;
