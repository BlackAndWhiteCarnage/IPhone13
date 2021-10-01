import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  @media screen and (max-width: 1000px) {
    min-width: unset;
  }
`;

export const IphoneImage = styled.img`
  width: 80%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
