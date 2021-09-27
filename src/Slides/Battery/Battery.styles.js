import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Letter = styled(motion.h4)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 200px;
  text-transform: uppercase;
  margin: 0 20px;
`;

export const Part = styled(motion.div)`
  display: flex;
  width: auto;
  min-width: 25%;
  align-items: center;
  justify-content: space-evenly;
`;
