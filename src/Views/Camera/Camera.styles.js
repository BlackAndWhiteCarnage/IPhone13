import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1366px;
  height: 100%;
  min-height: 2000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    min-width: unset;
  }
`;
