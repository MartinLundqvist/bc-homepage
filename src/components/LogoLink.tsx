import React from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  text-decoration: none;
  color: var(--color-highlight);
  font-weight: bold;
  padding: 0.75rem;
  border-color: var(--color-highlight);
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;

  &:hover {
    background-color: var(--color-background-highlight);
    transition: background-color 0.25s ease-in-out;
  }
`;

export default LogoLink;
