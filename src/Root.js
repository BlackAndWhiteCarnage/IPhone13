import { useState, useEffect } from 'react';
import { GlobalStyle } from 'Assets/Styles/GlobalStyles';
// COMPONENTS
import CanvasWrapper from 'Components/Canvas/Canvas';
// VIEWS
import Home from 'Views/Home/Home';
import Display from 'Views/Display/Display';
import Camera from 'Views/Camera/Camera';
import Battery from 'Views/Battery/Battery';
import styled from 'styled-components';
// HELPERS
import { matchMedia } from 'Helpers/matchMedia';
import { setIphonePosition, setIphonePositionMobile } from 'Helpers/iphoneAnimations';

const Break = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  background: ${({ theme }) => theme.colors.black};
  margin: 300px 0;
`;

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
      <Break />
      <Display setSectionIndex={setSectionIndex} />
      <Break />
      <Camera setSectionIndex={setSectionIndex} />
      <Break />
      <Battery setSectionIndex={setSectionIndex} />
    </>
  );
}

export default Root;
