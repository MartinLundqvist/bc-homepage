import React from 'react';
import Fade from 'react-reveal/Fade';
import './NavigationRight.css';

const NavigationRight = (): JSX.Element => {
  return (
    <Fade bottom>
      <div className='navigationrightcontainer'>
        <a href=''>iphonelynden@gmail.com</a>
        <div className='line'></div>
      </div>
    </Fade>
  );
};

export default NavigationRight;
