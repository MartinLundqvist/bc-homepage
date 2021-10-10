import React, { useState } from 'react';
import Link, { ILinkProps as ILink } from './Link';
import Button from './Button';
import Fade from 'react-reveal/Fade';
import HamburgerButton from './HamburgerButton';
import './HeaderNarrow.css';

const links: ILink[] = [
  {
    link: '#about',
    index: '01.',
    text: 'About',
  },
  {
    link: '#experience',
    index: '02.',
    text: 'Experience',
  },
  {
    link: '',
    index: '03.',
    text: 'Work',
  },
  {
    link: '',
    index: '04.',
    text: 'Contact',
  },
];

const HeaderNarrow = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='headernarrow'>
      <Fade left>
        <div className='logocontainer'>
          <a href='#home' className='logo'>
            ML
          </a>
        </div>
      </Fade>
      <Fade right>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className='hamburgerbuttoncontainer dark'
        >
          <HamburgerButton open={openMenu} />
        </div>
      </Fade>
      <HamburgerMenu open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};

interface IHamburgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ open, setOpen }: IHamburgerMenuProps): JSX.Element => {
  const buttonClickHandler = () => {
    console.log('Button clicked');
  };

  return (
    <React.Fragment>
      <div className={`hamburgercontainer ${open ? 'unhide' : ''}`}>
        <div></div>
        <div className='hamburgermenucontainer'>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderNarrow;
