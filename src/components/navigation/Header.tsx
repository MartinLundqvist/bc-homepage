import React, { useEffect, useRef, useState } from 'react';
import Link from './Link';
import Button from '../elements/Button';
import LogoLink from './LogoLink';
import FadeIn from '../utils/FadeIn';
import styled from 'styled-components';
import links from '../../assets/links';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  width: calc(100% - 100px);
  height: var(--nav-height);
  padding: 0px 50px 0px 50px;
  z-index: 100;
  background-color: var(--color-background-85);
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease-in-out;

  &.hide {
    transform: translateY(-100%);
  }
  &.shadow {
    box-shadow: 0px 0px 10px 0px black;
  }
`;

const Header = (): JSX.Element => {
  const [hide, setHide] = useState(false);
  const [shadow, setShadow] = useState(false);
  const prevScrollPos = useRef(0);

  const handleScroll = (ev: Event) => {
    const currentScrollPos = window.scrollY;
    const scrollUp = currentScrollPos > prevScrollPos.current ? true : false;
    const hasScrolled = currentScrollPos > 5 ? true : false;
    setShadow(hasScrolled);
    setHide(scrollUp);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', (ev) => handleScroll(ev));
    return () => window.removeEventListener('scroll', (ev) => handleScroll(ev));
  }, []);

  return (
    <Wrapper className={`${hide ? 'hide ' : shadow ? 'shadow' : ''}`}>
      <div style={{ flexGrow: 1 }}>
        <FadeIn direction='left'>
          <LogoLink href='/' className='logo'>
            ML
          </LogoLink>
        </FadeIn>
      </div>
      <FadeIn cascade direction='right'>
        {links.map((link) => (
          <Link
            key={link.index}
            link={link.link}
            index={link.index}
            text={link.text}
          />
        ))}
        <Button text='Resume' />
      </FadeIn>
    </Wrapper>
  );
};

export default Header;
