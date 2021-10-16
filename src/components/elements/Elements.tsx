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
  font-size: clamp(40px, 8vw, 80px);
  color: var(--color-primary);

  &.darker {
    color: var(--color-primary-darker);
  }
`;

export const H3 = styled.h3`
  font-style: inherit;
  font-weight: inherit;
  font-size: var(--font-size-regular);
  color: var(--color-highlight);
`;

export const H4 = styled.h4`
  font-size: var(--font-size-regular-plus);
  font-weight: bold;
  color: var(--color-primary);
  padding-right: 1rem;
  margin: 0px;
`;

export const H5 = styled.h5`
  font-weight: normal;
  font-size: var(--font-size-regular);
  color: var(--color-primary-darker);
  line-height: 1.5;
  letter-spacing: 0.1rem;
  margin: 0px;
`;

export const P = styled.p`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  font-style: normal;
  font-size: clamp(16px, 18px, 20px);
  /* font-size: var(--font-size-regular); */
  color: var(--color-primary-darker);
  line-height: 1.5;
  letter-spacing: 0.1rem;

  &.wide {
    width: 100%;
    margin-right: 30px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: var(--color-highlight);

    &::after {
      content: '';
      position: relative;
      display: block;
      bottom: 0.4rem;
      right: 0px;
      width: 0px;
      height: 1px;
      opacity: 0.5;
      background-color: var(--color-highlight);
      transition: width 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
