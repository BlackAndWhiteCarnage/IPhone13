import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  width: 30%;
  font-weight: bold;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 1s ease;
  top: 100px;
  font-size: 200px;
  @media screen and (max-width: 1000px) {
    width: 85%;
  }
  @media screen and (max-width: 680px) {
    top: 30%;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 1s ease;
  }
`;
