import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
`;

export const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  width: 100% !important;
  height: 100vh !important;
  top: 0 !important;
  left: 0 !important;
`;
