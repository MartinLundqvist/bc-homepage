import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 50px;
  height: 40px;
  color: ${(props) => props.theme.colors.highlight};
  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.highlight};
  height: 2px;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &.one {
    top: 0px;
    &.open {
      top: 50%;
      transform: rotate(45deg);
    }
  }

  &.two {
    top: 19px;
    &.open {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  &.three {
    bottom: 0px;
    &.open {
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`;

interface IHamburgerButtonProps {
  open: boolean;
}

const HamburgerButton = ({ open }: IHamburgerButtonProps): JSX.Element => {
  return (
    <Wrapper>
      <Line className={`one ${open ? 'open' : ''}`}></Line>
      <Line className={`two ${open ? 'open' : ''}`}></Line>
      <Line className={`three ${open ? 'open' : ''}`}></Line>
    </Wrapper>
  );
};

export default HamburgerButton;
