import React from 'react';
import styled from 'styled-components';
import { Section } from '../elements/Elements';
import SectionTitle from './SectionTitle';
import Projects from './Projects';

const SectionProjects = (): JSX.Element => {
  return (
    <Section id='projects'>
      <SectionTitle index='03.' title='Some projects' />
      <Projects />
    </Section>
  );
};

export default SectionProjects;
