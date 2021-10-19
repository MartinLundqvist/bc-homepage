import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateAll = keyframes`
  0% {
    transform: scale(1, 1);
  }
  60% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(0, 0);
}`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${animateAll} 1s ease-in-out 1.5s forwards;
`;

const Text = styled.div`
  position: absolute;
  color: ${(props) => props.theme.colors.highlight};
  font-weight: bold;
  font-size: ${(props) => props.theme.fonts.xlarge};
`;

const animateCircle = keyframes`
  from {
    stroke-dashoffset: 628;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 5px;
  stroke: ${(props) => props.theme.colors.highlight};
  stroke-dasharray: 628;
  animation: ${animateCircle} 3s ease-in-out;
`;

const Intro = (): JSX.Element => {
  return (
    <Wrapper>
      <svg height='200px' width='200px'>
        <Circle cx='100' cy='100' r='50' />
      </svg>
      <Text>ML</Text>
    </Wrapper>
  );
};

export default Intro;
