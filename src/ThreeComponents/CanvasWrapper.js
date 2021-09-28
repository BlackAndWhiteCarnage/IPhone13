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
  });

  return null;
};

const CanvasWrapper = ({ sectionIndex }) => {
  const returnWrapperClassHandler = () => {
    if (sectionIndex === 1) {
      return 'display';
    } else if (sectionIndex === 2) {
      return 'camera';
    } else if (sectionIndex === 3) {
      return 'battery';
    }
  };

  return (
    <StyledCanvasWrapper>
      <CanvasAndHeadersWrapper className={returnWrapperClassHandler()}>
        <DisplayHeader className={sectionIndex === 1 && 'show'}>
          {['D', 'I', 'S', 'P', 'L', 'A', 'Y'].map((letter) => (
            <Letter>{letter}</Letter>
          ))}
        </DisplayHeader>
        <CameraHeader className={sectionIndex === 2 && 'show'}>
          {['C', 'A', 'M', 'E', 'R', 'A'].map((letter) => (
            <Letter>{letter}</Letter>
          ))}
        </CameraHeader>
        <BatteryHeader className={sectionIndex === 3 && 'show'}>
          {['B', 'A', 'T', 'T', 'E', 'R', 'Y'].map((letter) => (
            <Letter>{letter}</Letter>
          ))}
        </BatteryHeader>
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
      </CanvasAndHeadersWrapper>
    </StyledCanvasWrapper>
  );
};

const StyledCanvasWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
`;

const CanvasAndHeadersWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 0%;
  background: #fcfcfc;
  transition: 2s 0.5s ease;
  &.display {
    box-shadow: 0px 0px 50px 10px #e2e2e2;
    transition: 2s 0.5s ease;
    width: 50.1%;
  }
  &.camera {
    box-shadow: 0px 0px 50px 10px #e2e2e2;
    transition: 2s 0.5s ease;
    width: 100%;
    height: 80%;
  }
  &.battery {
    box-shadow: 0px 0px 50px 10px #e2e2e2;
    transition: 2s 0.5s ease;
    width: 100%;
    height: 30%;
  }
`;

const DisplayHeader = styled.div`
  position: absolute;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  transform: translate(0, -50%);
  opacity: 0;
  font-weight: bold;
  writing-mode: vertical-lr;
  top: 100%;
  letter-spacing: 20px;
  transition: 1s ease;
  right: 300px;
  font-size: 250px;
  &.camera {
    writing-mode: unset;
    top: unset;
    bottom: 400px;
    right: unset;
    background: red;
    height: auto;
    opacity: 1;
    left: 50%;
    transform: translate(-50%);
    transition: 1s 2s ease;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 2s ease;
  }
`;

const CameraHeader = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  width: 100%;
  font-weight: bold;
  transform: translate(-50%);
  bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 20px;
  transition: 1s ease;
  bottom: 100px;
  font-size: 400px;
  &.show {
    top: unset;
    bottom: 400px;
    opacity: 1;
    transition: 1s 2s ease;
  }
`;

const BatteryHeader = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  font-weight: bold;
  display: flex;
  transform: translate(-50%);
  bottom: 100px;
  letter-spacing: 20px;
  transition: 1s ease;
  font-size: 400px;
  bottom: 100px;
  &.show {
    top: unset;
    bottom: -50px;
    opacity: 1;
    transition: 1s 2s ease;
  }
`;

const Letter = styled.p`
  text-transform: uppercase;
`;

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
`;

export default CanvasWrapper;
