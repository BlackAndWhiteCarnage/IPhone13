import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 520px) {
    left: 0;
  }
`;

export const Letter = styled(motion.h4)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 150px;
  text-transform: uppercase;
  margin: 0 20px;
  @media screen and (max-width: 520px) {
    font-size: 80px;
    margin: 0 5px;
  }
`;

export const Part = styled(motion.div)`
  display: flex;
  width: auto;
  min-width: 20%;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 520px) {
  }
`;
