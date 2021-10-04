import react from 'react';
import Link, { ILink } from './Link';
import Button from './Button';
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
  const buttonClickHandler = () => {
    console.log('Button clicked');
  };

  return (
    <div className='header'>
      <div className='logocontainer'>
        <div className='logo'>MDL</div>
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
