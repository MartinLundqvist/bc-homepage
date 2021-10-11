import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import WorkNavigator from './WorkNavigator';
import WorkNavigatorNarrow from './WorkNavigatorNarrow';
import WorkDetail from './WorkDetail';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 30px;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const WorkExperience = (): JSX.Element => {
  const [workId, setWorkId] = useState(0);

  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <Wrapper>
      {isDesktop ? (
        <WorkNavigator workId={workId} setWorkId={setWorkId} />
      ) : (
        <WorkNavigatorNarrow workId={workId} setWorkId={setWorkId} />
      )}
      <WorkDetail workId={workId} />
    </Wrapper>
  );
};
export default WorkExperience;
