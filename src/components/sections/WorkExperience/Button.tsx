import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: var(--work-nav-height);
  transition: all 0.5s;
  cursor: pointer;
  background-color: var(--color-background);
  color: var(--color-primary-darker);
  font-size: var(--font-size-small);
  border-top: 0px;
  border-right: 0px;
  letter-spacing: 0.1rem;

  width: 8rem;
  border-bottom: 0px;
  border-left: 1px solid var(--color-primary-darker);
  text-align: start;
  padding-left: 15px;

  @media (max-width: 1000px) {
    min-width: var(--work-nav-width);
    max-width: var(--work-nav-width);
    border-left: 0px;
    border-bottom: 1px solid var(--color-primary-darker);
    text-align: center;
  }

  &.highlight {
    color: var(--color-highlight);
  }

  &:hover {
    background-color: var(--color-background-highlight);
    color: var(--color-highlight);
  }
`;

export default Button;
