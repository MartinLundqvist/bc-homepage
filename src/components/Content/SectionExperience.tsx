import React from 'react';
import SectionTitle from './SectionTitle';
import './Content.css';
import WorkExperience from './WorkExperience';
import { useMediaQuery } from 'react-responsive';
// import './SectionExperience.css';

const SectionExperience = (): JSX.Element => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  return (
    <section id='experience' className={isDesktop ? 'narrow' : ''}>
      <SectionTitle index='02.' title='My experience so far' />
      <WorkExperience />
    </section>
  );
};

export default SectionExperience;
