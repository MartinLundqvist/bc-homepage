import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import NavigationLeft from './components/NavigationLeft';
import NavigationRight from './components/NavigationRight';
import Content from './components/Content/Content';

import { useMediaQuery } from 'react-responsive';
import HeaderNarrow from './components/HeaderNarrow';

const App = (): JSX.Element => {
  const [showIntro, setShowIntro] = useState(true);

  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 2500);
  }, []);

  if (showIntro) return <Intro />;

  return (
    <React.Fragment>
      {isDesktop ? <Header /> : <HeaderNarrow />}
      {isDesktop && <NavigationLeft />}
      {isDesktop && <NavigationRight />}
      <Content />
    </React.Fragment>
  );
};

export default App;
