import React from 'react';
// STYLES
import { InfoWrapper, Info, Text } from './DisplayInfo.styles';

const DisplayInfo = () => (
  <InfoWrapper>
    <Info className='bigger left'>
      <Text className='s'>Up to</Text>
      <Text className='xl'>
        25% brighter <br /> outdoors
      </Text>
      <Text className='s'>for content that looks even more vivid in sunlight</Text>
    </Info>
    <Info className='smaller right'>
      <Text className='m'>Custom OLED technology</Text>
      <Text className='s'>pushes the display’s incredible resolution and color right to the edge</Text>
    </Info>
    <Info className='smaller left'>
      <Text className='s'>Up to</Text>
      <Text className='m'>1200 nits</Text>
      <Text className='s'>peak brightness for your HDR photos and videos</Text>
    </Info>
    <Info className='bigger right'>
      <Text className='xl'>
        Even more <br /> display area
      </Text>
      <Text className='s'>thanks to a smaller TrueDepth camera system</Text>
    </Info>
    <Info className='bigger left'>
      <Text className='xl'>
        Incredible <br />
        color fidelity
      </Text>
      <Text className='s'>makes all your content look true to life</Text>
    </Info>
    <Info className='smaller right'>
      <Text className='m'>Striking contrast and resolution</Text>
      <Text className='s'>creates true blacks, bright whites, sharp detail, and crisp text</Text>
    </Info>
  </InfoWrapper>
);

export default DisplayInfo;
