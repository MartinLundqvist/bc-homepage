import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H4, H5 } from '../../elements/Elements';
import works, { IWork } from '../../../assets/workDB';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: flex-start;
  padding: 10px 5px 10px 50px;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 25px 0px 0px 0px;
    width: auto;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--color-primary-darker);
  font-size: var(--font-size-regular);
  letter-spacing: 0.1rem;

  &::before {
    position: absolute;
    transform: translateX(-40px);
    content: '>';
    color: var(--color-highlight);
  }
`;

interface IWorkDetailProps {
  workId: number;
}

const WorkDetail = ({ workId }: IWorkDetailProps): JSX.Element => {
  const [work, setWork] = useState<IWork>();

  useEffect(() => {
    setWork(works.find((work) => work.id == workId));
  }, [workId]);

  return (
    <Wrapper>
      <H4>{work?.worklong}</H4>
      <H5>
        {work?.from} - {work?.to}
      </H5>
      <List>
        {work?.descriptions.map((desc, index) => (
          <ListItem key={index}>{desc}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default WorkDetail;
