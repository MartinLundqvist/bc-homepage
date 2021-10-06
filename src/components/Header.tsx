import React from 'react';
import Link, { ILinkProps as ILink } from './Link';
import Button from './Button';
import './Header.css';

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

const Header = (): JSX.Element => {
  const buttonClickHandler = () => {
    console.log('Button clicked');
  };

  return (
    <div className='header'>
      <div className='logocontainer'>
        <a href='#home' className='logo'>
          ML
        </a>
      </div>
      {links.map((link) => (
        <Link
          key={link.index}
          link={link.link}
          index={link.index}
          text={link.text}
        />
      ))}
      <Button text='Resume' onClick={buttonClickHandler} />
    </div>
  );
};

export default Header;
