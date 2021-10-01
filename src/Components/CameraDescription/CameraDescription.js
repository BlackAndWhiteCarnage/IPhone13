import React from 'react';
import { Wrapper, Header, CameraParams } from './CameraDescription.styles';

const CameraDescription = () => (
  <Wrapper>
    <CameraParams>
      <Header>Telephoto</Header>
      <span>77 mm focal length 3x optical zoom ƒ/2.8 aperture</span>
      <p>Focus Pixels 6-element lens OIS</p>
    </CameraParams>
    <CameraParams>
      <Header>Ultra Wide</Header>
      <span>13 mm focal length</span>
      <p>ƒ/1.8 aperture Faster sensor Focus Pixels 6-element lens</p>
    </CameraParams>
    <CameraParams>
      <Header>Wide</Header>
      <span>26 mm focal length 1.9 μm pixels ƒ/1.5 aperture</span>
      <p>100% Focus Pixels 7-element lens Sensor-shift OIS</p>
    </CameraParams>
  </Wrapper>
);

export default CameraDescription;
