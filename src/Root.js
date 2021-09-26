import { useState, useEffect } from 'react';
import { GlobalStyle } from 'Assets/Styles/GlobalStyles';
import CanvasWrapper from 'ThreeComponents/CanvasWrapper';
import AllSlides from 'Slides/AllSlides';

import * as THREE from 'three';
import { threeState } from 'Helpers/threeState';

function Root() {
  const [sectionIndex, setSectionIndex] = useState(0);
  console.log(threeState.cameraPos);

  useEffect(() => {
    if (sectionIndex === 0) {
      threeState.cameraPos = new THREE.Vector3(1, 0, 0);
    } else if (sectionIndex === 1) {
      threeState.cameraPos = new THREE.Vector3(0, 0, 1);
    }
  }, [sectionIndex]);

  return (
    <>
      <GlobalStyle />
      <CanvasWrapper sectionIndex={sectionIndex} />
      <AllSlides setSectionIndex={setSectionIndex} sectionIndex={sectionIndex} />
    </>
  );
}

export default Root;
