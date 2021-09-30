import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Info = styled.div`
  min-height: 300px;
  border: 1px solid #bdbdbe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    border-left: none !important;
    border-right: none !important;
  }
  @media screen and (max-width: 680px) {
    padding: 40px 20px;
    min-height: 400px;
  }
  &.bigger {
    width: 60%;
  }
  &.smaller {
    width: 40%;
  }
  &.left {
    text-align: left;
    border-left: none;
  }
  &.right {
    border-right: none;
    text-align: right;
  }
`;

export const Text = styled.span`
  width: 100%;
  &.s {
    color: #bdbdbe;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &.m {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
