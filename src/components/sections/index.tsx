import React from 'react';
// import './Content.css';
import styled from 'styled-components';
// import Fade from 'react-reveal/Fade';
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
    padding-right: calc(var(--side-padding) / 2);
    padding-left: calc(var(--side-padding) / 2);
  }
`;

const Content = (): JSX.Element => {
  return (
    <Wrapper>
      <FadeIn cascade direction='up'>
        <SectionStart />
        <SectionAbout />
        <SectionExperience />
      </FadeIn>
    </Wrapper>
  );
};

export default Content;
