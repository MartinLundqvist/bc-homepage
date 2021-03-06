import React from 'react';
import styled from 'styled-components';
import FadeIn from '../utils/FadeIn';
import SectionStart from './SectionStart';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';
import SectionProjects from './SectionProjects';
import SectionContact from './SectionContact';
import Footer from './Footer';

const Wrapper = styled.div`
  top: 0px;
  bottom: 0px;
  min-height: 100vh;
  z-index: 0;
  padding-right: ${(props) => props.theme.dimensions.sidePadding};
  padding-left: ${(props) => props.theme.dimensions.sidePadding};

  @media (max-width: 1000px) {
    padding-right: ${(props) => props.theme.dimensions.sidePaddingNarrow};
    padding-left: ${(props) => props.theme.dimensions.sidePaddingNarrow};
  }
`;

// The 'content' id is in order to target a blur effect in the mobile mode. See index.css file.
const Content = (): JSX.Element => {
  return (
    <Wrapper id='content'>
      <FadeIn direction='up' duration={0.5} distance='50px'>
        <SectionStart />
      </FadeIn>
      <FadeIn direction='up' duration={0.5} distance='50px'>
        <SectionAbout />
      </FadeIn>
      <FadeIn direction='up' duration={0.5} distance='50px'>
        <SectionExperience />
      </FadeIn>
      <FadeIn direction='up' duration={0.5} distance='50px'>
        <SectionProjects />
      </FadeIn>
      <FadeIn direction='up' duration={0.5} distance='50px'>
        <SectionContact />
      </FadeIn>
      <Footer />
    </Wrapper>
  );
};

export default Content;
