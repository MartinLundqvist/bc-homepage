import React from 'react';
import Erikssons from './Erikssons.png';
import Glosly from './Glosly.png';
import Twolaymen from './Twolaymen.png';
import BCHomepage from './BCHompage.png';
import GitLogo from '../components/elements/GitLogo';
import LinkLogo from '../components/elements/LinkLogo';

export interface IProject {
  image: string;
  projectUrl: string;
  projectTitle: string;
  projectSubTitle: string;
  projectDescription: string;
  projectTools: string[];
  projectLinks: IProjectLinks[];
}

export interface IProjectLinks {
  url: string;
  logo: JSX.Element;
}

const projects: IProject[] = [
  {
    image: BCHomepage,
    projectUrl: 'https://martinlundqvist.se/',
    projectTitle: 'Project',
    projectSubTitle: 'My current homepage',
    projectDescription:
      "What better way to learn more advanced front-end concepts, than to try and rebuild awesome existing pages from the ground up? I found Brittany's page on a top-10 list of beautiful homepages. ",
    projectTools: ['Node', 'React', 'ViteJs', 'Styled-Components', 'Netify'],
    projectLinks: [
      {
        url: 'https://github.com/MartinLundqvist/bc-homepage',
        logo: <GitLogo />,
      },
      {
        url: 'https://martinlundqvist.se/',
        logo: <LinkLogo />,
      },
    ],
  },
  {
    image: Twolaymen,
    projectUrl: 'http://www.twolaymenhugeissues.com/',
    projectTitle: 'Podcast',
    projectSubTitle: 'Two laymen with huge issues',
    projectDescription:
      "My good friend Joakim and I thought we should step out of our comfort zones and start a podcast. It was a cool journey to understand how to record, edit, register, publish and manage these things. And it's good fun to record too!",
    projectTools: ['Node', 'React', 'Express', 'Heroku', 'Zencastr', 'Podbean'],
    projectLinks: [
      {
        url: 'https://github.com/MartinLundqvist/twolaymen',
        logo: <GitLogo />,
      },
      {
        url: 'http://www.twolaymenhugeissues.com/',
        logo: <LinkLogo />,
      },
    ],
  },
  {
    image: Erikssons,
    projectUrl: 'https://erikssons.herokupapp.com',
    projectTitle: 'Project',
    projectSubTitle: "Eriksson's meat",
    projectDescription:
      "Thomas runs a butcher shop down the street from where we live. Customers use printed forms to pre-order in front of the bigger holidays. I thought I'd combine fun with utility and built a simple web application allowing them to do it online instead.",
    projectTools: ['Node', 'React', 'MongoDB', 'Express', 'Auth0', 'Heroku'],
    projectLinks: [
      {
        url: 'https://github.com/MartinLundqvist/erikssons',
        logo: <GitLogo />,
      },
      {
        url: 'https://erikssons.herokupapp.com',
        logo: <LinkLogo />,
      },
    ],
  },
  {
    image: Glosly,
    projectUrl: 'https://glosly.eu',
    projectTitle: 'Project',
    projectSubTitle: 'Train vocables',
    projectDescription:
      "My son is studying Spanish, and I thought I'd build a simple web application for managing and testing vocables. This was my first attempt at building a full stack web application.",
    projectTools: [
      'Node',
      'React',
      'MaterialUI',
      'Express',
      'MongoDB',
      'Auth0',
      'Heroku',
    ],
    projectLinks: [
      {
        url: 'https://github.com/MartinLundqvist/vocably',
        logo: <GitLogo />,
      },
      {
        url: 'https://glosly.eu',
        logo: <LinkLogo />,
      },
    ],
  },
];

export default projects;
