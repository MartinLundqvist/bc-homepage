import React, { useState, useEffect, useRef } from 'react';
import LogoLink from './LogoLink';
import FadeIn from '../utils/FadeIn';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  width: calc(100% - 50px);
  height: ${(props) => props.theme.dimensions.header};
  padding: 0px 25px 0px 25px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.bgTransparent};
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease-in-out;

  &.hide {
    transform: translateY(-100%);
  }
  &.shadow {
    box-shadow: 0px 0px 10px 0px black;
  }
`;

const HamburgerWrapper = styled.div`
  position: relative;
  padding-right: 25px;
  padding-right: 0px;
  justify-self: end;
  align-self: center;
`;

const HeaderNarrow = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hide, setHide] = useState(false);
  const [shadow, setShadow] = useState(false);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', (ev) => handleScroll(ev));
    return () => window.removeEventListener('scroll', (ev) => handleScroll(ev));
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('menu');
    } else {
      document.body.classList.remove('menu');
    }
  }, [openMenu]);

  const handleScroll = (ev: Event) => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < 5) {
      setHide(false);
    } else {
      const scrollUp = currentScrollPos < prevScrollPos.current ? false : true;
      setHide(scrollUp);
    }
    const hasScrolled = currentScrollPos > 5 ? true : false;
    setShadow(hasScrolled);
    prevScrollPos.current = currentScrollPos;
  };

  return (
    <Wrapper className={`${hide ? 'hide ' : shadow ? 'shadow' : ''}`}>
      <FadeIn direction='left'>
        <div style={{ flexGrow: 1 }}>
          <LogoLink href='#home' className='logo'>
            ML
          </LogoLink>
        </div>
      </FadeIn>
      <HamburgerMenu open={openMenu} setOpen={setOpenMenu} />
      <FadeIn direction='right'>
        <HamburgerWrapper onClick={() => setOpenMenu(!openMenu)}>
          <HamburgerButton open={openMenu} />
        </HamburgerWrapper>
      </FadeIn>
    </Wrapper>
  );
};

export default HeaderNarrow;
