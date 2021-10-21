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
          Hello my name is Martin Lundqvist and I'm a tech geek by birth,
          musician in my heart and management advisor by training. My day job is
          CEO of{' '}
          <a href='https:/www.arundo.com' target='_blank'>
            Arundo Analytics
          </a>{' '}
          and I sometimes invest in other tech teams I believe in (shout out to{' '}
          <a href='https://buddywise.co/' target='_blank'>
            BuddyWise
          </a>{' '}
          and{' '}
          <a href='https://www.keto-ai.com/' target='_blank'>
            Keto.AI
          </a>{' '}
          /{' '}
          <a href='https://www.clyrpool.com/' target='_blank'>
            Clyr
          </a>
          ).
          <br />
          When I'm not working, spending time with my wife and son or hanging
          out at our beach house in the Stockholm archipelago, I play piano and
          code - two long standing passions that I picked up again after a 20
          year long break.
        </P>
        <MartinImage />
      </Wrapper>
    </Section>
  );
};

export default SectionAbout;
