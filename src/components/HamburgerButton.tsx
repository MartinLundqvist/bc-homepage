import React from 'react';
import './HamburgerButton.css';

interface IHamburgerButtonProps {
  open: boolean;
}

const HamburgerButton = ({ open }: IHamburgerButtonProps): JSX.Element => {
  return (
    <div className='hamburgerbutton'>
      <div id='lineone' className={`line ${open ? 'open' : ''}`}></div>
      <div id='linetwo' className={`line ${open ? 'open' : ''}`}></div>
      <div id='linethree' className={`line ${open ? 'open' : ''}`}></div>
    </div>
  );
};

export default HamburgerButton;
