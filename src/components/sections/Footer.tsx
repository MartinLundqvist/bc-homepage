import React from 'react';
import styled from 'styled-components';
import { P as PT } from '../elements/Elements';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const P = styled(PT)`
  width: auto;
  font-size: 14px;
  text-align: center;
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <P>Designed by Brittany Chiang, built by Martin Lundqvist</P>
    </Wrapper>
  );
};

export default Footer;
