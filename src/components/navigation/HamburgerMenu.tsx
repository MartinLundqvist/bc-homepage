import React, { useState } from 'react';
import Link from './Link';
import Button from '../elements/Button';
import styled from 'styled-components';
import links from '../../assets/links';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: grid;
  grid-template-rows: var(--nav-height) auto;
  width: 400px;
  height: 100vh;
  background-color: var(--color-hamburger-background);
  transform: translateX(100%);
  transition: transform 0.25s ease-in-out, visibility 0.25s;
  visibility: hidden;

  &.unhide {
    visibility: visible;
    transform: translateX(0);
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: var(--color-hamburger-background);
`;

interface IHamburgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ open, setOpen }: IHamburgerMenuProps): JSX.Element => {
  const buttonClickHandler = () => {
    console.log('Button clicked');
  };

  return (
    <Wrapper className={open ? 'unhide' : ''}>
      <div></div>
      <MenuWrapper>
        {links.map((link) => (
          <Link
            large
            key={link.index}
            link={link.link}
            index={link.index}
            text={link.text}
          />
        ))}
        <Button text='Resume' onClick={buttonClickHandler} />
      </MenuWrapper>
    </Wrapper>
  );
};

export default HamburgerMenu;
