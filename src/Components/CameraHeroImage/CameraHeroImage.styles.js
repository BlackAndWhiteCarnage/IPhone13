import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  padding-top: 500px;
  overflow: hidden;
  @media screen and (max-width: 680px) {
    padding-top: 300px;
  }
`;

export const HeroImage = styled.img`
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%);
  width: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 680px) {
    width: 250px;
    top: 100px;
  }
`;

export const Part = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &.right {
    align-self: flex-end;
  }
  &.center {
    align-self: center;
  }
`;
