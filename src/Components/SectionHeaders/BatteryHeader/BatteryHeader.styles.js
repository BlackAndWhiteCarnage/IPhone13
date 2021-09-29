import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  top: 100px;
  transition: 1s ease;
  font-size: 200px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 680px) {
    font-size: 65px;
    top: 80%;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 1s ease;
  }
`;
