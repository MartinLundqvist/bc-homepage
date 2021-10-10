import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem;
  color: var(--color-highlight);
  background-color: inherit;
  border: 2px solid;
  border-radius: 5px;
  font-family: inherit;
  font-size: inherit;

  &:hover {
    background-color: var(--color-background-highlight);
    cursor: pointer;
    transition: background-color 0.25s ease-in;
  }
`;

export interface IButtonProps {
  onClick?: () => void;
  text: string;
}

const defaultHandler = () => {
  return;
};

const Button = ({ onClick, text }: IButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onClick ? onClick : defaultHandler}>
      {text}
    </StyledButton>
  );
};

export default Button;
