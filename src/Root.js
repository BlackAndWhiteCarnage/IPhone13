import { useState, useEffect } from 'react';
import { GlobalStyle } from 'Assets/Styles/GlobalStyles';
import CanvasWrapper from 'ThreeComponents/CanvasWrapper';
import AllSlides from 'Slides/AllSlides';
import Home from 'Slides/Home/Home';
import Display from 'Slides/Display/Display';
import Camera from 'Slides/Camera/Camera';
import Battery from 'Slides/Battery/Battery';
import * as THREE from 'three';
import { threeState } from 'Helpers/threeState';
import styled from 'styled-components';
import { matchMedia } from 'Helpers/matchMedia';

const SectionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

const Break = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  background: yellow;
`;

function Root() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(sectionIndex);

  const setIphonePosition = () => {
    if (sectionIndex === 0) {
      threeState.cameraPos = new THREE.Vector3(1, 0, 0);
      threeState.target = new THREE.Vector3(0, 0, 0);
    } else if (sectionIndex === 1) {
      if (prevIndex === 2) {
        threeState.cameraPos = new THREE.Vector3(0, 1, 0);
        threeState.target = new THREE.Vector3(0, 1, 0);
        setTimeout(() => {
          threeState.cameraPos = new THREE.Vector3(0, 0, -0.85);
          threeState.target = new THREE.Vector3(0, 0, 0);
        }, 500);
      } else {
        threeState.cameraPos = new THREE.Vector3(0, 0, -0.85);
        threeState.target = new THREE.Vector3(0, 0, 0);
      }
    } else if (sectionIndex === 2) {
      if (prevIndex === 3) {
        threeState.cameraPos = new THREE.Vector3(0, 0.5, 0.5);
        threeState.target = new THREE.Vector3(0, 0.5, 0);
      } else {
        threeState.cameraPos = new THREE.Vector3(0, 1, 0);
        threeState.target = new THREE.Vector3(0, 1, 0);
        setTimeout(() => {
          threeState.cameraPos = new THREE.Vector3(0, 0.5, 0.5);
          threeState.target = new THREE.Vector3(0, 0.5, 0);
        }, 500);
      }
    } else if (sectionIndex === 3) {
      threeState.cameraPos = new THREE.Vector3(0, -1, 0.1);
      threeState.target = new THREE.Vector3(0, 0, 0);
    }
  };

  const setIphonePositionMobile = () => {
    if (sectionIndex === 0) {
      threeState.cameraPos = new THREE.Vector3(0.9, 0, 0);
      threeState.target = new THREE.Vector3(0, 0, 0);
    } else if (sectionIndex === 1) {
      if (prevIndex === 2) {
        threeState.cameraPos = new THREE.Vector3(0, 1, 0);
        threeState.target = new THREE.Vector3(0, 1, 0);
        setTimeout(() => {
          threeState.cameraPos = new THREE.Vector3(0, 0, -0.75);
          threeState.target = new THREE.Vector3(0, 0, 0);
        }, 500);
      } else {
        threeState.cameraPos = new THREE.Vector3(0, 0, -0.75);
        threeState.target = new THREE.Vector3(0, 0, 0);
      }
    } else if (sectionIndex === 2) {
      if (prevIndex === 3) {
        threeState.cameraPos = new THREE.Vector3(0, 0.5, 0.75);
        threeState.target = new THREE.Vector3(0, 0.5, 0);
      } else {
        threeState.cameraPos = new THREE.Vector3(0, 1, 0);
        threeState.target = new THREE.Vector3(0, 1, 0);
        setTimeout(() => {
          threeState.cameraPos = new THREE.Vector3(0, 0.5, 0.75);
          threeState.target = new THREE.Vector3(0, 0.5, 0);
        }, 500);
      }
    } else if (sectionIndex === 3) {
      threeState.cameraPos = new THREE.Vector3(0, -1.15, 0.1);
      threeState.target = new THREE.Vector3(0, 1, 0);
    }
  };

  useEffect(() => {
    !matchMedia ? setIphonePosition() : setIphonePositionMobile();
    setPrevIndex(sectionIndex);
  }, [sectionIndex]);

  return (
    <>
      <GlobalStyle />
      <CanvasWrapper sectionIndex={sectionIndex} prevIndex={prevIndex} />
      {/* <AllSlides setSectionIndex={setSectionIndex}  /> */}
      <SectionsWrapper>
        <Home setSectionIndex={setSectionIndex} />
        <Break />
        <Display setSectionIndex={setSectionIndex} />
        <Break />
        <Camera setSectionIndex={setSectionIndex} />
        <Break />
        <Battery setSectionIndex={setSectionIndex} />
      </SectionsWrapper>
    </>
  );
}

export default Root;
