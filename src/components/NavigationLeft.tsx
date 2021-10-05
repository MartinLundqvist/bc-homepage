import React from 'react';
import './NavigationLeft.css';
import GitLogo from '../logos/GitLogo';
import CodePenLogo from '../logos/CodePenLogo';
import InstaLogo from '../logos/InstaLogo';
import LinkedInLogo from '../logos/LinkedInLogo';
import TwitterLogo from '../logos/TwitterLogo';

interface ILink {
  text: string;
  link: string;
  logo: JSX.Element;
}

const links: ILink[] = [
  {
    text: 'Github',
    link: '',
    logo: <GitLogo />,
  },
  {
    text: 'Twitter',
    link: '',
    logo: <TwitterLogo />,
  },
  {
    text: 'Instagram',
    link: '',
    logo: <InstaLogo />,
  },
  {
    text: 'LinkedIn',
    link: '',
    logo: <LinkedInLogo />,
  },
  {
    text: 'CodePen',
    link: '',
    logo: <CodePenLogo />,
  },
];

const NavigationLeft = (): JSX.Element => {
  return (
    <div className='navigationleftcontainer'>
      {links.map((link, index) => (
        <a key={index} href={link.link} className='link'>
          {link.logo}
        </a>
      ))}
      <div className='line' />
    </div>
  );
};

export default NavigationLeft;
