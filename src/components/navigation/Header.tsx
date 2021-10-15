import React from 'react';
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
  background-color: var(--color-background);
`;

const Header = (): JSX.Element => {
  const buttonClickHandler = () => {
    console.log('Button clicked');
  };

  return (
    <Wrapper>
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
        <Button text='Resume' onClick={buttonClickHandler} />
      </FadeIn>
    </Wrapper>
  );
};

export default Header;
