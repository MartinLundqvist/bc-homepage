import react from 'react';
import { ILink } from '../../assets/links';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  font-size: var(--font-size-small);

  span.index {
    padding-left: 1.5rem;
    padding-right: 0.25rem;
    color: var(--color-highlight);
    font-weight: bold;
  }

  span.text {
    color: var(--color-primary);
    transition: color 0.2s ease-in;
    padding-right: 1.5rem;

    &:hover {
      color: var(--color-highlight);
    }
  }

  &.large {
    font-size: var(--font-size-regular-plus);
  }
`;

interface ILinkProps extends ILink {
  large?: boolean;
}

const Link = ({
  link,
  index,
  text,
  large = false,
}: ILinkProps): JSX.Element => {
  return (
    <StyledLink className={large ? 'large' : ''} href={link}>
      <span className='index'>{index}</span>
      <span className='text'>{text}</span>
    </StyledLink>
  );
};

export default Link;
