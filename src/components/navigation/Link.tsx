import react from 'react';
import { ILink } from '../../assets/links';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.small};

  span.index {
    padding-left: 1.5rem;
    padding-right: 0.25rem;
    color: ${(props) => props.theme.colors.highlight};
    font-weight: bold;
  }

  span.text {
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.2s ease-in;
    padding-right: 1.5rem;

    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
  }

  &.large {
    font-size: ${(props) => props.theme.fonts.large};
  }
`;

interface ILinkProps extends ILink {
  large?: boolean;
  onClick?: () => void;
}

const Link = ({
  link,
  index,
  text,
  large = false,
  onClick = undefined,
}: ILinkProps): JSX.Element => {
  return (
    <StyledLink onClick={onClick} className={large ? 'large' : ''} href={link}>
      <span className='index'>{index}</span>
      <span className='text'>{text}</span>
    </StyledLink>
  );
};

export default Link;
