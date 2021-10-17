import React from 'react';
import styled from 'styled-components';
import { H2 as H2T, H3 as H3T, P } from '../../elements/Elements';
import ImageEffect from '../../utils/ImageEffect';
import projects from '../../../assets/projectsDB';

const ProjectList = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 10px 0px 40px 0px;
`;

const ProjectListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 50px;
  margin-bottom: 100px;
`;

const ProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / 1;
  align-self: center;

  &.flip {
    grid-column: 6 / 13;

    @media (max-width: 1000px) {
      grid-column: 1 / 13;
      opacity: 0.25;
    }
  }

  @media (max-width: 1000px) {
    grid-column: 1 / 13;
    opacity: 0.25;
  }
`;

const ProjectDetails = styled.div`
  position: relative;
  grid-column: 5 / 13;
  grid-row: 1 / 1;
  text-align: right;
  z-index: 1;

  &.flip {
    grid-column: 1 / 9;
    text-align: left;

    @media (max-width: 1000px) {
      grid-column: 1 / 13;
    }
  }

  @media (max-width: 1000px) {
    grid-column: 1 / 13;
    text-align: left;
  }
`;

const PStyled = styled(P)`
  /* margin: 0; */
  box-sizing: border-box;
  padding: 25px 20px 25px 20px;
  margin: 0;
  background-color: var(--color-background-lighter);
  box-shadow: 5px 5px 10px black;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 30px black;
  }
`;

const H2 = styled(H2T)`
  margin-top: 0px;
  margin-bottom: 25px;
`;

const H3 = styled(H3T)`
  margin-top: 0px;
  margin-bottom: 25px;
`;

const ProjectToolsList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 25px 0px 0px 0px;

  &.flip {
    justify-content: flex-start;
  }

  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

const ProjectToolsListItem = styled.li`
  padding-left: 10px;
  padding-top: 10px;
  color: var(--color-primary);
`;

const ProjectLinkList = styled(ProjectToolsList)``;

const ProjectLinkListItem = styled(ProjectToolsListItem)`
  display: block;
  width: 20px;
  height: 20px;

  a {
    color: var(--color-primary);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-highlight);
    }
  }
`;

const Projects = (): JSX.Element => {
  return (
    <ProjectList>
      {projects.map((project, index) => (
        <ProjectListItem key={project.projectSubTitle}>
          <ProjectImage className={index % 2 != 0 ? 'flip' : ''}>
            <a href={project.projectUrl} target='_blank'>
              <ImageEffect>
                <img src={project.image} />
              </ImageEffect>
            </a>
          </ProjectImage>
          <ProjectDetails className={index % 2 != 0 ? 'flip' : ''}>
            <H3>{project.projectTitle}</H3>
            <H2>{project.projectSubTitle}</H2>
            <PStyled>{project.projectDescription}</PStyled>
            <ProjectToolsList className={index % 2 != 0 ? 'flip' : ''}>
              {project.projectTools.map((tool) => (
                <ProjectToolsListItem key={tool}>{tool}</ProjectToolsListItem>
              ))}
            </ProjectToolsList>
            <ProjectLinkList className={index % 2 != 0 ? 'flip' : ''}>
              {project.projectLinks.map((link) => (
                <ProjectLinkListItem key={link.url}>
                  <a href={link.url} target='_blank'>
                    {link.logo}
                  </a>
                </ProjectLinkListItem>
              ))}
            </ProjectLinkList>
          </ProjectDetails>
        </ProjectListItem>
      ))}
    </ProjectList>
  );
};

export default Projects;
