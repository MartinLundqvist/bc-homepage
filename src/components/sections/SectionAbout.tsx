import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import MartinImage from './MartinImage';
import { Section, P } from '../elements/Elements';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: unset;
  column-gap: 30px;
  row-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-rows: auto auto;
    grid-template-columns: unset;
  }
`;

const SectionAbout = (): JSX.Element => {
  return (
    <Section id='about'>
      <SectionTitle index='01.' title='About me' />
      <Wrapper>
        <P className='wide'>
          Hello my name is Martin Lundqvist and I have nothing very clever to
          say here. In fact, since this is merely a learning exercise for me, I
          don't really need to do anything else than add a bunch of nonsensical
          text. :)
          <br />I should also insert some <a href=''>random links</a> since
          that's kind of <a href=''>cool</a> looking.
          <br />
          Just for the <a href=''>heck</a> of it, here's a couple of more space
          wasting couple of words. Again including the{' '}
          <a href=''>random link</a>.
        </P>
        <MartinImage />
      </Wrapper>
    </Section>
  );
};

export default SectionAbout;
