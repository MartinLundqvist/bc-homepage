import react from 'react';
import Link, { ILink } from './Link';
import './Header.css';

const links: ILink[] = [
  {
    link: '',
    index: '01.',
    text: 'About',
  },
  {
    link: '',
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
  return (
    <div className='header'>
      <div className='logo'>MDL</div>
      {links.map((link) => (
        <Link link={link.link} index={link.index} text={link.text} />
      ))}
    </div>
  );
};

export default Header;
