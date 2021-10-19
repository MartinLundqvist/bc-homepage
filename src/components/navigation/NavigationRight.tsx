import React from 'react';
import styled from 'styled-components';
import FadeIn from '../utils/FadeIn';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 45%;
  bottom: 0px;
  right: 0px;
  width: ${(props) => props.theme.dimensions.sidePadding};
`;

const Link = styled.a`
  display: block;
  padding: 10px 0px 10px 0px;
  flex-grow: 1;
  writing-mode: vertical-rl;
  font-size: inherit;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
    transform: translateY(-5px);
  }
`;

const Line = styled.div`
  height: 150px;
  width: 1px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const NavigationRight = (): JSX.Element => {
  return (
    <Wrapper>
      <FadeIn cascade direction='up'>
        <Link href='mailto:iphonelynden@gmail.com'>iphonelynden@gmail.com</Link>
        <Line />
      </FadeIn>
    </Wrapper>
  );
};

export default NavigationRight;
