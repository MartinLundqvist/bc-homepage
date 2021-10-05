import React from 'react';
import './Button.css';

export interface IButtonProps {
  onClick?: () => void;
  text: string;
}

const defaultHandler = () => {
  return;
};

const Button = ({ onClick, text }: IButtonProps): JSX.Element => {
  return (
    <button className='button' onClick={onClick ? onClick : defaultHandler}>
      {text}
    </button>
  );
};

export default Button;
