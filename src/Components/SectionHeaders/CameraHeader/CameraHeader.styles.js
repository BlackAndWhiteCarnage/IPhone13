import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  opacity: 0;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transform: translate(-50%, -50%);
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 1s ease;
  font-size: 200px;
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 680px) {
    top: 20%;
    z-index: 2;
    color: ${({ theme }) => theme.colors.black};
    writing-mode: vertical-rl;
    left: 150%;
  }
  &.show {
    top: 50%;
    opacity: 1;
    transition: 1s 1s ease;
  }
`;
