import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 520px) {
    left: 0;
  }
`;

export const Letter = styled(motion.h4)`
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-size: 400px;
  line-height: 300px;
`;

export const Part = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  height: 100%;
`;
