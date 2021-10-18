import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Section, P as PT } from '../elements/Elements';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const P = styled(PT)`
  width: auto;
  text-align: center;
`;

const SectionContact = (): JSX.Element => {
  return (
    <Section id='contact'>
      <Wrapper>
        <SectionTitle index='04. Contact' title='Reach out' wrap />
        <P>
          Reach out! I'm always available at{' '}
          <a href='mailto:iphonelynden@gmail.com'>iphonelynden@gmail.com</a> or
          my{' '}
          <a href='https://www.linkedin.com/in/martin-lundqvist-5bb940'>
            LinkedIn profile
          </a>
          !
        </P>
      </Wrapper>
    </Section>
  );
};

export default SectionContact;
