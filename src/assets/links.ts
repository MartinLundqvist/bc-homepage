export interface ILink {
  link: string;
  index: string;
  text: string;
  large?: boolean;
}

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
    link: '#projects',
    index: '03.',
    text: 'Projects',
  },
  {
    link: '#contact',
    index: '04.',
    text: 'Contact',
  },
];

export default links;
