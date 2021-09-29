import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 0%;
  background: #fcfcfc;
  transition: 1s 0.5s ease;
  color: white;
  background: ${({ theme }) => theme.colors.black};
  &.display {
    transition: 1s 0.5s ease;
    width: 50.1%;
  }
  &.camera {
    transition: 1s 0.5s ease;
    width: 100%;
    height: 65%;
    @media screen and (max-width: 680px) {
      height: 100%;
      width: 50.1%;
    }
  }
  &.battery {
    transition: 1s 0.5s ease;
    width: 100%;
    height: 30%;
    @media screen and (max-width: 680px) {
      height: 40%;
    }
  }
`;
