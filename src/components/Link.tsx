import react from 'react';
import './Link.css';

export interface ILink {
  link: string;
  index: string;
  text: string;
}

const Link = ({ link, index, text }: ILink): JSX.Element => {
  return (
    <a className='linkoverrides' href={link}>
      <span className='index'>{index}</span>
      <span className='text'>{text}</span>
    </a>
  );
};

export default Link;
