import { useFrame } from '@react-three/fiber';
// HEPLERS
import { threeState } from 'Helpers/threeState';

const CameraControls = () => {
  useFrame(({ camera, scene }) => {
    camera.position.lerp(threeState.cameraPos, 0.04);
    scene.orbitControls.target.lerp(threeState.target, 0.04);
    scene.orbitControls.update();
  });

  return null;
};

export default CameraControls;
