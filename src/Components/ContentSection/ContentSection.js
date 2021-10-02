import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  margin: 300px 0;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
  &.noMargin {
    margin: 0;
  }
  &.battery {
    min-height: 1400px;
    background: #fbfbfd;
  }
`;

const ContentSection = ({ children, className }) => <Wrapper className={className}>{children}</Wrapper>;

export default ContentSection;
