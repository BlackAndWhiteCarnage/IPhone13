import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 150px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    margin: 50px 0;
  }
`;

export const CameraParams = styled.div`
  width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
    border-bottom: 2px solid #bdbdbe;
    padding: 50px 20px;
    &:first-child {
      border-top: 2px solid #bdbdbe;
    }
  }
  span,
  p {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p {
    color: #bdbdbe;
  }
`;

export const Header = styled.h4`
  width: fit-content;
  padding: 10px;
  border-bottom: 2px solid #bdbdbe;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  @media screen and (max-width: 1000px) {
    border: none;
  }
`;
