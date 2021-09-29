import * as THREE from 'three';
import { threeState } from 'Helpers/threeState';

export const setIphonePosition = (sectionIndex, prevIndex) => {
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
    threeState.cameraPos = new THREE.Vector3(0, -0.8, 0.1);
    threeState.target = new THREE.Vector3(0, 0, 0);
  }
};

export const setIphonePositionMobile = (sectionIndex, prevIndex) => {
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
    threeState.cameraPos = new THREE.Vector3(0, -1, 0);
    threeState.target = new THREE.Vector3(0, 0.1, 0);
    setTimeout(() => {
      threeState.cameraPos = new THREE.Vector3(0, -1.15, 0.1);
      threeState.target = new THREE.Vector3(0, 1, 0);
    }, 500);
  }
};
