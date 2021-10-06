import React from 'react';
import SectionTitle from './SectionTitle';
import './Content.css';
import WorkExperience from './WorkExperience';
// import './SectionExperience.css';

const SectionExperience = (): JSX.Element => {
  return (
    <section id='experience' className='narrow'>
      <SectionTitle index='02.' title='My experience so far' />
      <WorkExperience />
    </section>
  );
};

export default SectionExperience;
