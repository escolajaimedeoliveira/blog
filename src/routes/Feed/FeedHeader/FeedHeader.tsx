import React from 'react';
import styled from '@emotion/styled';

const FeedHeader: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="title">Últimos Posts</div>
    </StyledWrapper>
  );
};

export default FeedHeader;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
