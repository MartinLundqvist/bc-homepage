import react from 'react';
import './Link.css';

export interface ILinkProps {
  link: string;
  index: string;
  text: string;
  large?: boolean;
}

const Link = ({
  link,
  index,
  text,
  large = false,
}: ILinkProps): JSX.Element => {
  return (
    <a className={`linkoverrides ${large && 'large'}`} href={link}>
      <span className='index'>{index}</span>
      <span className='text'>{text}</span>
    </a>
  );
};

export default Link;
