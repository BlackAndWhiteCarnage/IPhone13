import * as THREE from 'three';

export const threeState = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(1, 0, 0),
  target: new THREE.Vector3(0, 0, 0),
  shoudUpdate: true,
};
