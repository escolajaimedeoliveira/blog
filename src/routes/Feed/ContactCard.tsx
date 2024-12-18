import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineMail, AiOutlineFacebook, AiOutlinePhone } from 'react-icons/ai';
import { CONFIG } from 'site.config';
import { Emoji } from 'src/components/Emoji';

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Contato
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.facebook && (
          <a href={`https://www.facebook.com/${CONFIG.profile.facebook}`} rel="noreferrer" target="_blank">
            <AiOutlineFacebook className="icon" />
            <div className="name">facebook</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a href={`mailto:${CONFIG.profile.email}`} rel="noreferrer" target="_blank" css={{ overflow: 'hidden' }}>
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
        {CONFIG.profile.phone && (
          <a href={`tel:1535546001`} rel="noreferrer">
            <AiOutlinePhone className="icon" />
            <div className="name">15 3554-6001</div>
          </a>
        )}
      </StyledWrapper>
    </>
  );
};

export default ContactCard;

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) => (theme.scheme === 'light' ? 'white' : theme.colors.gray4)};

  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }

    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
