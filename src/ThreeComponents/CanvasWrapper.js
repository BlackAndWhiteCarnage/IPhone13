import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber';
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
      <HomeHeader className={sectionIndex === 0 && 'show'}>
        {['1', '3'].map((letter) => (
          <Letter>{letter}</Letter>
        ))}
      </HomeHeader>
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
    @media screen and (max-width: 680px) {
      background: ${({ theme }) => theme.colors.black};
    }
  }
  &.camera {
    box-shadow: 0px 0px 50px 10px #e2e2e2;
    transition: 2s 0.5s ease;
    width: 100%;
    height: 65%;
    @media screen and (max-width: 680px) {
      height: 100%;
      width: 50.1%;
      background: ${({ theme }) => theme.colors.black};
    }
  }
  &.battery {
    box-shadow: 0px 0px 50px 10px #e2e2e2;
    transition: 2s 0.5s ease;
    width: 100%;
    height: 30%;
    @media screen and (max-width: 680px) {
      height: 40%;
      background: ${({ theme }) => theme.colors.black};
      color: white;
    }
  }
`;

const HomeHeader = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  width: 30%;
  font-weight: bold;
  transform: translate(-50%, -50%);
  bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 1s ease;
  top: 100px;
  font-size: 200px;
  @media screen and (max-width: 1000px) {
    width: 85%;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 2s ease;
  }
`;

const DisplayHeader = styled.div`
  position: absolute;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-weight: bold;
  writing-mode: vertical-lr;
  top: 100%;
  transition: 1s ease;
  left: 50%;
  font-size: 200px;
  @media screen and (max-width: 1380px) {
    font-size: 150px;
    left: 50%;
  }
  @media screen and (max-width: 1000px) {
    left: 0%;
    transform: translate(0%, -50%);
  }
  @media screen and (max-width: 680px) {
    z-index: 2;
    color: white;
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
  transform: translate(-50%, -50%);
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 1s ease;
  bottom: 100px;
  font-size: 200px;
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 680px) {
    z-index: 2;
    color: ${({ theme }) => theme.colors.black};
    writing-mode: vertical-rl;
    height: 100%;
    left: 150%;
  }
  &.show {
    top: 50%;
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
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  top: 100px;
  transition: 1s ease;
  font-size: 200px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 680px) {
    font-size: 65px;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 1s ease;
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
