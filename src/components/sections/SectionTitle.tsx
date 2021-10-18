import React from 'react';
import styled from 'styled-components';

// TODO: Move SectionTitle to Elements

interface IWrapper {
  wrap: string;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: ${(props) => (props.wrap == 'wrap' ? 'column' : 'row')};
  right: 0px;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Index = styled.div`
  font-size: var(--font-size-large);
  color: var(--color-highlight);
  /* padding-right: 1rem; */
`;

const Title = styled.div`
  font-size: var(--font-size-large);
  font-weight: bold;
  color: var(--color-primary);
  /* padding-right: 1rem; */
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
  wrap?: boolean;
}

const SectionTitle = ({
  index,
  title,
  wrap = false,
}: ISectionTitleProps): JSX.Element => {
  return (
    <Wrapper wrap={wrap ? 'wrap' : ''}>
      <Index>{index}</Index>
      <Title>{title}</Title>
      {!wrap && <Line />}
    </Wrapper>
  );
};

export default SectionTitle;
