import React from 'react';
import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: block;
//   position: relative;
//   max-width: 250px;

//   @media (max-width: 1000px) {
//     align-self: center;
//     justify-self: center;
//   }
// `;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    background: ${(props) => props.theme.colors.highlight};
  }

  &:hover {
    &::before {
      background-color: inherit;
    }

    img {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  img {
    display: block;
    height: auto;
    width: 100%;
    padding: 0;
    margin: 0;
    filter: grayscale(100%);
    mix-blend-mode: multiply;
  }
`;

interface IImageWrapperProps {
  children: React.ReactNode;
}

const ImageEffect = ({ children }: IImageWrapperProps): JSX.Element => {
  return (
    // <Wrapper>
    <ImageWrapper>{children}</ImageWrapper>
    // </Wrapper>
  );
};

export default ImageEffect;
