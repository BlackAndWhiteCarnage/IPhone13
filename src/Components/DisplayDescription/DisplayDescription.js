import React from 'react';
// IMAGES
import iphoneDisplay from 'Assets/Images/IphoneImages/iphoneDisplay2.jpg';
// STYLES
import { Wrapper, Header, Text, Part, ProMotionImage } from './DisplayDescription.styles';

const DisplayDescription = () => (
  <Wrapper>
    <Header>
      <strong>Hello, ProMotion.</strong>
      <br />
      <span>
        Meet the 120Hz adaptive refresh display
        <br /> that changes the game.
      </span>
    </Header>
    <Text>
      <Part>
        The new Super Retina XDR display with ProMotion can refresh from 10 to 120 times per second, and all kinds of frame rates in between. It
        intelligently ramps up when you need exceptional graphics performance, and ramps down to save power when you don’t. It even accelerates and
        decelerates naturally to match the speed of your finger as you scroll. You’ve never felt anything like it.
      </Part>
      <Part>iOS 15 is optimized for ProMotion, so the things you do every day feel phenomenally fluid</Part>
    </Text>
    <ProMotionImage src={iphoneDisplay} />
  </Wrapper>
);

export default DisplayDescription;
