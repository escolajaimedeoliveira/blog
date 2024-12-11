import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { CONFIG } from 'site.config';
import { Emoji } from 'src/components/Emoji';

const ProfileCard: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>🏫</Emoji> Escola
      </div>
      <div className="content">
        <div className="top">
          <Image src={CONFIG.profile.image} layout="responsive" width={400} height={300} alt="" />
        </div>
        <div className="mid">
          <div className="name">EE PEI Jaime de Oliveira</div>
          <div className="location">📍 Ponte Alta, Barra do Chapéu - SP</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProfileCard;

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === 'light' ? 'white' : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      width: 100%;
      border-radius: 1rem 1rem 0 0;
    }
    .mid {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
      }
      .location {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
    }
  }
`;
