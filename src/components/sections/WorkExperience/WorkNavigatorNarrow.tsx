import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import works from '../../../assets/workDB';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: ${(props) => props.theme.dimensions.navButtonHeight};
  width: ${(props) =>
    `calc(100% + ${props.theme.dimensions.sidePaddingNarrow} * 2)`};
  margin-right: ${(props) =>
    `calc(${props.theme.dimensions.sidePaddingNarrow} * -1)`};

  margin-left: ${(props) =>
    `calc(${props.theme.dimensions.sidePaddingNarrow} * -1)`};
  overflow-x: auto;
  z-index: +10;
`;

const Highlight = styled.div`
  position: relative;
  top: calc(100% - 3px);
  height: 3px;
  min-width: ${(props) => props.theme.dimensions.navButtonWidth};
  background-color: ${(props) => props.theme.colors.highlight};
  transition: all 0.25s ease-in-out;
`;

interface IWorkNavigatorNarrowProps {
  workId: number;
  setWorkId: React.Dispatch<React.SetStateAction<number>>;
}

const WorkNavigatorNarrow = ({
  workId,
  setWorkId,
}: IWorkNavigatorNarrowProps): JSX.Element => {
  const [rightPosition, setRightPosition] = useState(0);

  useEffect(() => {
    const position = 120 * (works.length - workId);
    setRightPosition(position);
  }, [workId]);

  return (
    <Wrapper>
      {works.map((work) => (
        <Button
          className={workId == work.id ? 'highlight' : ''}
          key={work.id}
          onClick={() => setWorkId(work.id)}
        >
          {work.work}
        </Button>
      ))}
      <Highlight style={{ right: `${rightPosition}px` }}></Highlight>
    </Wrapper>
  );
};

export default WorkNavigatorNarrow;
