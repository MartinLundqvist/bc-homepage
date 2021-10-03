import react from 'react';

export interface ILink {
  link: string;
  index: string;
  text: string;
}

const Link = ({ link, index, text }: ILink): JSX.Element => {
  return (
    <div>
      {link} {index} {text}
    </div>
  );
};

export default Link;
