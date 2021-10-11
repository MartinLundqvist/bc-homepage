import React from 'react';
import SectionTitle from './SectionTitle';
import { Section } from '../elements/Elements';
import WorkExperience from './WorkExperience';
import { useMediaQuery } from 'react-responsive';

const SectionExperience = (): JSX.Element => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  return (
    <Section id='experience' className={isDesktop ? 'narrow' : ''}>
      <SectionTitle index='02.' title='My experience so far' />
      <WorkExperience />
    </Section>
  );
};

export default SectionExperience;
