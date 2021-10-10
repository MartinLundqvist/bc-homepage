import React, { useState } from 'react';
import LogoLink from './LogoLink';
import Fade from 'react-reveal/Fade';
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
  height: var(--nav-height);
  padding: 0px 25px 0px 25px;
  z-index: 100;
  background-color: var(--color-background);
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

  return (
    <Wrapper>
      <Fade left>
        <div style={{ flexGrow: 1 }}>
          <LogoLink href='#home' className='logo'>
            ML
          </LogoLink>
        </div>
      </Fade>
      <HamburgerMenu open={openMenu} setOpen={setOpenMenu} />
      <Fade right>
        <HamburgerWrapper onClick={() => setOpenMenu(!openMenu)}>
          <HamburgerButton open={openMenu} />
        </HamburgerWrapper>
      </Fade>
    </Wrapper>
  );
};

export default HeaderNarrow;
