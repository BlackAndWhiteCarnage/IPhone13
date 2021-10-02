import React, { Suspense } from 'react';
import IphoneModel from '../../ThreeComponents/IphoneModel';
import { extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// THREE COMPONENTS
import Orbit from '../../ThreeComponents/Orbit';
import CameraControls from '../../ThreeComponents/CameraControls';
import AllLights from '../../ThreeComponents/AllLights';
// HELPERS
import { threeState } from 'Helpers/threeState';
// COMPONENTS
import CanvasAndHeadersWrapper from 'Components/CanvasAndHeadersWrapper/CanvasAndHeadersWrapper';
import HomeHeader from 'Components/SectionHeaders/HomeHeader/HomeHeader';
import DisplayHeader from 'Components/SectionHeaders/DisplayHeader/DisplayHeader';
import CameraHeader from 'Components/SectionHeaders/CameraHeader/CameraHeader';
import BatteryHeader from 'Components/SectionHeaders/BatteryHeader/BatteryHeader';
// STYLES
import { Wrapper, StyledCanvas } from './Canvas.styles';

extend({ OrbitControls });

const CanvasWrapper = ({ sectionIndex }) => (
  <Wrapper>
    <HomeHeader sectionIndex={sectionIndex} />
    <CanvasAndHeadersWrapper sectionIndex={sectionIndex}>
      <DisplayHeader sectionIndex={sectionIndex} />
      <CameraHeader sectionIndex={sectionIndex} />
      <BatteryHeader sectionIndex={sectionIndex} />
      <BatteryHeader className={sectionIndex === 3 && 'show'}></BatteryHeader>
      <StyledCanvas camera={{ position: threeState.cameraPos }}>
        <Suspense fallback={null}>
          <IphoneModel path='/13/scene.gltf' />
        </Suspense>
        <AllLights />
        <Orbit />
        <CameraControls />
      </StyledCanvas>
    </CanvasAndHeadersWrapper>
  </Wrapper>
);

export default CanvasWrapper;
