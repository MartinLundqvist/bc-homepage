import React, { useRef, useEffect, useState, Children } from 'react';
import styled, { keyframes } from 'styled-components';

interface IKeyframeProps {
  translateX: string;
  translateY: string;
  opacity: number;
}

const animatedKeyframes = ({
  translateX,
  translateY,
  opacity,
}: IKeyframeProps) => keyframes`
from {
  transform: translate(${translateX}, ${translateY});
  opacity: ${opacity};
}
to {
  transform: none;
  opacity: 1;
}
`;

interface IAnimatedProps extends IKeyframeProps {
  duration: number;
  delay: number;
}

const Animated = styled.div<IAnimatedProps>`
  opacity: 0;

  &.animate {
    animation: ${(props) =>
        animatedKeyframes({
          translateX: props.translateX,
          translateY: props.translateY,
          opacity: props.opacity,
        })}
      ${(props) => props.duration}s ease-in ${(props) => props.delay}s forwards;
  }
`;

export interface IFadeInProps {
  children: React.ReactNode;
  direction?: string;
  duration?: number;
  delay?: number;
  cascade?: boolean;
  opacity?: number;
  distance?: string;
}

const FadeIn = ({
  children,
  direction = '',
  delay = 0,
  duration = 1,
  cascade = false,
  opacity = 0,
  distance = '200px',
  ...props
}: IFadeInProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  if (cascade && Children.count(children) > 0) {
    const cascadeDelayIncrement = duration / Children.count(children);
    const childArray = Children.toArray(children) as JSX.Element[]; //Consistently typed array
    const cascadedFades = Children.map(childArray, (child, index) => {
      return (
        <FadeIn
          key={index}
          direction={direction}
          delay={cascadeDelayIncrement * index}
          duration={duration - index * cascadeDelayIncrement}
          {...child.props}
        >
          {child}
        </FadeIn>
      );
    });

    return <React.Fragment>{cascadedFades}</React.Fragment>;
  }

  let domRef = useRef<HTMLDivElement>(null);
  var x = '0px';
  var y = '0px';
  switch (direction) {
    case 'left':
      x = `-${distance}`;
      break;
    case 'right':
      x = `${distance}`;
      break;
    case 'up':
      y = `${distance}`;
      break;
    case 'down':
      y = `-${distance}`;
      break;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // I am setting as visible permanently once it has appeared
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: [0.1, 0.5, 0.9] }
    );
    domRef.current && observer.observe(domRef.current);

    return () =>
      domRef.current ? observer.unobserve(domRef.current) : undefined;
  }, []);

  return (
    <Animated
      translateX={x}
      translateY={y}
      duration={duration}
      delay={delay}
      opacity={opacity}
      className={isVisible ? 'animate' : ''}
      ref={domRef && domRef}
      {...props}
    >
      {children}
    </Animated>
  );
};

export default FadeIn;
