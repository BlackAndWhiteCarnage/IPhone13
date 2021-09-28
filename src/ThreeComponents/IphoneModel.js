import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const IphoneModel = ({ path }) => {
  const model = useLoader(GLTFLoader, path);
  const ref = useRef();

  return <primitive object={model.scene} ref={ref} />;
};

export default IphoneModel;
