import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useData } from '../../../contexts/DataContextProvider';
//import works from '../../../assets/workDB';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: auto;
`;

const Highlight = styled.div`
  position: relative;
  height: ${(props) => props.theme.dimensions.navButtonHeight};
  width: 3px;
  background-color: ${(props) => props.theme.colors.highlight};
  transition: all 0.25s ease-in-out;
`;

interface IWorkNavigatorProps {
  workId: number;
  setWorkId: React.Dispatch<React.SetStateAction<number>>;
}

const WorkNavigator = ({
  workId,
  setWorkId,
}: IWorkNavigatorProps): JSX.Element => {
  const [bottomPosition, setBottomPosition] = useState(0);
  const { dataAPI } = useData();

  useEffect(() => {
    if (dataAPI) {
      const position = 48 * (dataAPI.getWorks()!.length - workId); // Dangerous
      setBottomPosition(position);
    }
  }, [workId]);

  return (
    <Wrapper>
      {dataAPI?.getWorks()?.map((work) => (
        <Button
          className={workId == work.id ? 'highlight' : ''}
          key={work.id}
          onClick={() => setWorkId(work.id)}
        >
          {work.work}
        </Button>
      ))}
      <Highlight style={{ bottom: `${bottomPosition}px` }}></Highlight>
    </Wrapper>
  );
};

export default WorkNavigator;
