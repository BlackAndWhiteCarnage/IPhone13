import styled from 'styled-components';

export const Wrapper = styled.h4`
  position: absolute;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-weight: bold;
  writing-mode: vertical-lr;
  top: 100%;
  transition: 1s ease;
  left: 50%;
  font-size: 200px;
  @media screen and (max-width: 1380px) {
    font-size: 150px;
    left: 50%;
  }
  @media screen and (max-width: 1000px) {
    left: 0%;
    transform: translate(0%, -50%);
  }
  @media screen and (max-width: 680px) {
    z-index: 2;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 1s ease;
  }
`;
