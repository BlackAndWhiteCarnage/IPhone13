import React from 'react';
// COMPONENTS
import Light from './Light';

const AllLights = () => (
  <>
    <Light position={[0, 0, 0.2]} />
    <Light position={[-0.1, 0.3, 0.2]} />
    <Light position={[0, 0, -1]} />
    <Light position={[1, 0, 0]} />
    <Light position={[0, 1, 0]} />
    <Light position={[0, -1, 0]} />
    <ambientLight intensity={0.2} />
  </>
);

export default AllLights;
