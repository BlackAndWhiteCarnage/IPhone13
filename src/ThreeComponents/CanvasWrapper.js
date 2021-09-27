import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Lights from './Lights';
import Orbit from './Orbit';
import IphoneModel from './IphoneModel';
import { threeState } from 'Helpers/threeState';
extend({ OrbitControls });

const CameraControls = () => {
  useFrame(({ camera, scene }) => {
    camera.position.lerp(threeState.cameraPos, 0.04);
    scene.orbitControls.target.lerp(threeState.target, 0.04);
    scene.orbitControls.update();
    // const diff = camera.position.clone().sub(threeState.cameraPos).length();
    // if (diff < 0.0001) threeState.shoudUpdate = false;
  });

  return null;
};

const CanvasWrapper = () => {
  return (
    <>
      <StyledCanvas camera={{ position: threeState.cameraPos }}>
        <Suspense fallback={null}>
          <IphoneModel path='/13/scene.gltf' />
        </Suspense>
        <Lights position={[0, 0, 1]} />
        <Lights position={[0, 0, -1]} />
        <Lights position={[1, 0, 0]} />
        <Lights position={[-1, 0, 0]} />
        <Lights position={[0, 1, 0]} />
        <Lights position={[0, -1, 0]} />
        <ambientLight intensity={1} />
        <Orbit />
        <CameraControls />
        {/* <axesHelper args={[5]} /> */}
      </StyledCanvas>
    </>
  );
};

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default CanvasWrapper;
