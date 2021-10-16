import React from 'react';
import styled from 'styled-components';
import image from '../../assets/Martin.jpg';

const Wrapper = styled.div`
  display: block;
  position: relative;
  max-width: 250px;

  @media (max-width: 1000px) {
    align-self: center;
    justify-self: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: +1;

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
    border-radius: 15px;
    background: var(--color-highlight);
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 3px solid var(--color-highlight);
    border-radius: 15px;
    z-index: -1;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      transform: translate(-10px, -10px);
    }
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
    border-radius: 15px;
    border-width: 0px;
    padding: 0;
    margin: 0;
    filter: grayscale(100%);
    mix-blend-mode: multiply;
  }
`;

const MartinImage = (): JSX.Element => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image}></img>
      </ImageWrapper>
    </Wrapper>
  );
};

export default MartinImage;
