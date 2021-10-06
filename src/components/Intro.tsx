import React from 'react';
import './Intro.css';

const Intro = (): JSX.Element => {
  return (
    <div className='introcontainer'>
      <svg height='200px' width='200px'>
        <circle cx='100' cy='100' r='50' className='circleprogress' />
      </svg>
      <div className='introtext'>ML</div>
    </div>
  );
};

export default Intro;
