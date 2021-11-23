import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useData } from '../../../contexts/DataContextProvider';
//import works from '../../../assets/workDB';

interface WrapperProps {
  rightPos: number;
}

const Wrapper = styled.div<WrapperProps>`
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

  &::after {
    content: '';
    position: relative;
    top: calc(100% - 3px);
    right: ${(props) => props.rightPos}px;
    height: 3px;
    min-width: ${(props) => props.theme.dimensions.navButtonWidth};
    background-color: ${(props) => props.theme.colors.highlight};
    transition: all 0.25s ease-in-out;
  }
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
  const { dataAPI } = useData();

  useEffect(() => {
    if (dataAPI) {
      const position = 120 * (dataAPI.getWorks()!.length - workId);
      setRightPosition(position);
    }
  }, [workId, dataAPI]);

  return (
    <Wrapper rightPos={rightPosition}>
      {dataAPI?.getWorks()?.map((work, index) => (
        <Button
          className={workId == work.id ? 'highlight' : ''}
          key={work.id}
          onClick={() => setWorkId(work.id)}
        >
          {work.work}
        </Button>
      ))}
    </Wrapper>
  );
};

export default WorkNavigatorNarrow;
