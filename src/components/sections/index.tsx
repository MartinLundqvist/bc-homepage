import React from 'react';
import styled from 'styled-components';
import FadeIn from '../utils/FadeIn';
import SectionStart from './SectionStart';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';

const Wrapper = styled.div`
  top: 0px;
  bottom: 0px;
  min-height: 100vh;
  z-index: 0;
  padding-right: var(--side-padding);
  padding-left: var(--side-padding);

  @media (max-width: 1000px) {
    padding-right: var(--side-padding-narrow);
    padding-left: var(--side-padding-narrow);
  }
`;

// The 'content' id is in order to target a blur effect in the mobile mode. See index.css file.
const Content = (): JSX.Element => {
  return (
    <Wrapper id='content'>
      <FadeIn cascade direction='up'>
        <SectionStart />
        <SectionAbout />
        <SectionExperience />
      </FadeIn>
    </Wrapper>
  );
};

export default Content;
