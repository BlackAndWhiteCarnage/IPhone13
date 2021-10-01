import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1600px;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  background: #fbfbfd;
  @media screen and (max-width: 1000px) {
    min-height: 1300px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  z-index: 1;
  width: 60%;
  margin-bottom: 100px;
  strong {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  flex-wrap: wrap;
  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;

export const Part = styled.article`
  width: 45%;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 100px;
  @media screen and (max-width: 1366px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

export const ProMotionImage = styled.img`
  width: 1200px;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;
