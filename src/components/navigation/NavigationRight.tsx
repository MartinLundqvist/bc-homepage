import React from 'react';
import styled from 'styled-components';
import FadeIn from '../utils/FadeIn';
// import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 45%;
  bottom: 0px;
  right: 0px;
  width: var(--side-padding);
`;

const Link = styled.a`
  flex-grow: 1;
  writing-mode: vertical-rl;
  font-size: inherit;
  text-decoration: none;
  color: var(--color-primary);
  transition: all 0.1s ease-in-out;

  &:hover {
    color: var(--color-highlight);
    transform: translateY(-5px);
  }
`;

const Line = styled.div`
  height: 150px;
  width: 1px;
  background-color: var(--color-primary);
`;

const NavigationRight = (): JSX.Element => {
  return (
    <Wrapper>
      <FadeIn cascade direction='up'>
        <Link href=''>iphonelynden@gmail.com</Link>
        <Line />
      </FadeIn>
    </Wrapper>
  );
};

export default NavigationRight;
