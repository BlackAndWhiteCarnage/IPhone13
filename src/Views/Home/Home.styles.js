import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1000px 1000px 1000px 1000px;
  grid-template-areas:
    'area1 area2'
    'area3 area4'
    'area5 area6'
    'area7 area7';
  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: 600px 600px 600px 600px 600px 600px 600px;
    grid-template-areas:
      'area1'
      'area2'
      'area3'
      'area4'
      'area5'
      'area6'
      'area7';
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #000;
  overflow: hidden;
  &:nth-child(1) {
    grid-area: area1;
  }
  &:nth-child(2) {
    grid-area: area2;
  }
  &:nth-child(3) {
    grid-area: area3;
  }
  &:nth-child(4) {
    grid-area: area4;
  }
  &:nth-child(5) {
    grid-area: area5;
  }
  &:nth-child(6) {
    grid-area: area6;
  }
  &:nth-child(7) {
    grid-area: area7;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media screen and (max-width: 1000px) {
    &:nth-child(3) {
      grid-area: area4;
    }
    &:nth-child(4) {
      grid-area: area3;
    }
  }
  &.white {
    background: #fbfbfd;
  }
  &.bottom {
    img {
      max-height: 900px;
      position: absolute;
      bottom: 0;
      @media screen and (max-width: 1000px) {
        max-width: 300px;
        max-height: 300px;
      }
    }
  }
`;

export const Image = styled.img`
  max-width: 700px;
  max-height: 600px;
  @media screen and (max-width: 1366px) {
    max-width: 500px;
    max-height: 600px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 300px;
    max-height: 300px;
  }
  &.absolute {
    position: absolute;
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%);
    transition: 1s ease;
  }
  &.show {
    transition: 1s ease;
    left: 50%;
  }
  &.notActive {
    opacity: 0;
    transition: 1s ease;
  }
  &.active {
    opacity: 1;
    transition: 1s ease;
  }
`;

export const ColorsWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 40%;
  max-width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1000px) {
    bottom: 20px;
    width: 40%;
  }
`;

export const ColorControls = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Color = styled.div`
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fbfbfd;
  &.blue {
    background: #98b2ca;
  }
  &.white {
    background: #eff0ea;
  }
  &.gold {
    background: #e8d2b6;
  }
  &.gray {
    background: #504e4b;
  }
  &.active {
    border: 2px solid #0d93de;
  }
`;

export const ColorNamesWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const ColorName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  opacity: 0.25;
  transition: 1s ease;
  &.active {
    opacity: 0.8;
    transition: 1s ease;
  }
  @media screen and (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
