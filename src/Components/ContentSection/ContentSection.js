import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  margin: 300px 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContentSection = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentSection;
