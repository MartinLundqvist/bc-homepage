import React from 'react';
import './Content.css';
import SectionStart from './SectionStart';
import SectionAbout from './SectionAbout';

const Content = (): JSX.Element => {
  return (
    <div className='contentcontainer'>
      <SectionStart />
      <SectionAbout />
    </div>
  );
};

export default Content;
