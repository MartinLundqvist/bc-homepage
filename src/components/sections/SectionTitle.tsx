import React from 'react';
import styled from 'styled-components';

// TODO: Move SectionTitle to Elements

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  right: 0px;
  align-items: center;
  justify-content: flex-start;
`;

const Index = styled.div`
  font-size: var(--font-size-large);
  color: var(--color-highlight);
  padding-right: 1rem;
`;

const Title = styled.div`
  font-size: var(--font-size-large);
  font-weight: bold;
  color: var(--color-primary);
  padding-right: 1rem;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  opacity: 0.75;
  background-color: var(--color-primary-darker);
`;

export interface ISectionTitleProps {
  index?: string;
  title?: string;
}

const SectionTitle = ({ index, title }: ISectionTitleProps): JSX.Element => {
  return (
    <Wrapper>
      <Index>{index}</Index>
      <Title>{title}</Title>
      <Line />
    </Wrapper>
  );
};

export default SectionTitle;
