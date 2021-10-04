import React from 'react';
import './Button.css';

export interface IButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: IButtonProps): JSX.Element => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
