import React from 'react';
// import './Content.css';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
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
      <Fade bottom>
        <SectionStart />
        <SectionAbout />
        <SectionExperience />
      </Fade>
    </Wrapper>
  );
};

export default Content;
