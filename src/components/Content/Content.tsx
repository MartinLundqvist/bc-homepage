import React from 'react';
import './Content.css';
import Fade from 'react-reveal/Fade';
import SectionStart from './SectionStart';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';

const Content = (): JSX.Element => {
  return (
    <div className='contentcontainer'>
      <Fade bottom>
        <SectionStart />
        <SectionAbout />
        <SectionExperience />
      </Fade>
    </div>
  );
};

export default Content;
