import React from 'react';
import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  padding-top: 100px;
  padding-bottom: 100px;

  &.narrow {
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const H1 = styled.h1`
  margin: 0px;
  font-size: ${(props) => props.theme.fonts.xxlarge};
  color: ${(props) => props.theme.colors.primary};

  &.darker {
    color: ${(props) => props.theme.colors.darker};
  }
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fonts.xlarge};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const H3 = styled.h3`
  font-style: inherit;
  font-weight: inherit;
  font-size: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.highlight};
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.fonts.large};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  padding-right: 1rem;
  margin: 0px;
`;

export const H5 = styled.h5`
  font-weight: normal;
  font-size: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.darker};
  line-height: 1.5;
  letter-spacing: 0.1rem;
  margin: 0px;
`;

export const P = styled.p`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  font-style: normal;
  font-size: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.darker};
  line-height: 1.3;
  letter-spacing: 0.05rem;

  &.wide {
    width: 100%;
    margin-right: 30px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme.colors.highlight};

    &::after {
      content: '';
      position: relative;
      display: block;
      bottom: 0.2rem;
      right: 0px;
      width: 0px;
      height: 1px;
      opacity: 0.5;
      background-color: ${(props) => props.theme.colors.highlight};
      transition: width 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
