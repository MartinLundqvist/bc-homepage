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
  font-size: ${(props) => props.theme.fonts.xlarge};
  color: ${(props) => props.theme.colors.highlight};
  /* padding-right: 1rem; */
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fonts.xlarge};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  /* padding-right: 1rem; */
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  opacity: 0.75;
  background-color: ${(props) => props.theme.colors.darker};
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
