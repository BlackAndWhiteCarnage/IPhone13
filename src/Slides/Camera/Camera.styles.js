import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
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
