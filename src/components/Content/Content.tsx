import React from 'react';
import './Content.css';
import SectionStart from './SectionStart';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';

const Content = (): JSX.Element => {
  return (
    <div className='contentcontainer'>
      <SectionStart />
      <SectionAbout />
      <SectionExperience />
    </div>
  );
};

export default Content;
