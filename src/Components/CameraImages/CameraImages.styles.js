import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfd;
  padding: 50px;
`;

export const ImagesWrapper = styled.div`
  position: relative;
  width: 1300px;
  min-height: 1300px;
  @media screen and (max-width: 680px) {
    min-height: 1000px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: auto;
  &.leftTop {
    left: 0;
    top: 0;
  }
  &.centerRight {
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  &.leftBottom {
    left: 0;
    bottom: 0;
  }
  @media screen and (max-width: 680px) {
    position: static;
    transform: none !important;
    right: unset;
    left: 50%;
    width: 100%;
    height: auto;
  }
`;
