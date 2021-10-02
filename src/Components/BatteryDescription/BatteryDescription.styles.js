import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const Header = styled.p`
  width: 100%;
  margin-bottom: 25px;
  span {
    color: #03a10e;
  }
  &.m {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: #bdbdbe;
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  &.xxl {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 50%;
  height: auto;
  border-bottom: 2px solid #bdbdbe;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const ChargeInfo = styled.div`
  width: 100%;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
