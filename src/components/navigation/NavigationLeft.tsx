import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import GitLogo from '../elements/GitLogo';
import CodePenLogo from '../elements/CodePenLogo';
import InstaLogo from '../elements/InstaLogo';
import LinkedInLogo from '../elements/LinkedInLogo';
import TwitterLogo from '../elements/TwitterLogo';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 45%;
  bottom: 0px;
  left: 0px;
  width: var(--side-padding);
  z-index: 19;
`;

const Link = styled.a`
  width: 24px;
  height: 24px;
  color: var(--color-primary);
  transition: all 0.1s ease-in-out;

  &:hover {
    color: var(--color-highlight);
    transform: translateY(-5px);
  }
`;

const Line = styled.div`
  height: 150px;
  width: 1px;
  background-color: var(--color-primary);
`;

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
    <Fade bottom>
      <Wrapper>
        {links.map((link, index) => (
          <Link key={index} href={link.link}>
            {link.logo}
          </Link>
        ))}
        <Line />
      </Wrapper>
    </Fade>
  );
};

export default NavigationLeft;
