import React from 'react';
import image from '../../assets/Martin.jpg';
import './MartinImage.css';

const MartinImage = (): JSX.Element => {
  return (
    <div className='wrapper'>
      <div className='imagewrapper'>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default MartinImage;
