import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { Section, H1, H3, P } from '../elements/Elements';

const StyledSection = styled(Section)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
`;

const SectionStart = (): JSX.Element => {
  return (
    <StyledSection id='home' className='start'>
      <H3>Hi, my name is</H3>
      <H1>Martin Lundqvist</H1>
      <H1 className='darker'>Amateur web developer</H1>
      <P>
        I am a hobby / amateur software developer trying to get better at web
        development. Reproducing awesome homepages built by the best designers
        out there is a one of many great ways to learn! Check out{' '}
        <a href='https://brittanychiang.com/'> Brittany's site</a> where I stole
        this design from and built this page from the ground up using React and
        Styled-Components.
      </P>
      <Button text='Click here to learn more' />
    </StyledSection>
  );
};

export default SectionStart;
