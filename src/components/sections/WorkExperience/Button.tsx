import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: ${(props) => props.theme.dimensions.navButtonHeight};
  transition: all 0.5s;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.darker};
  font-size: ${(props) => props.theme.fonts.small};
  border-top: 0px;
  border-right: 0px;
  letter-spacing: 0.1rem;

  width: 8rem;
  border-bottom: 0px;
  border-left: 1px solid ${(props) => props.theme.colors.darker};
  text-align: start;
  padding-left: 15px;

  @media (max-width: 1000px) {
    min-width: ${(props) => props.theme.dimensions.navButtonWidth};
    max-width: ${(props) => props.theme.dimensions.navButtonWidth};
    border-left: 0px;
    border-bottom: 1px solid ${(props) => props.theme.colors.darker};
    text-align: center;
  }

  &.highlight {
    color: ${(props) => props.theme.colors.highlight};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.bgHighlight};
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export default Button;
