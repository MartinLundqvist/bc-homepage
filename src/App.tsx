import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import NavigationLeft from './components/NavigationLeft';
import NavigationRight from './components/NavigationRight';
import Content from './components/Content/Content';

const App = (): JSX.Element => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 2500);
  }, []);

  if (showIntro) return <Intro />;

  return (
    <React.Fragment>
      <Header />
      <NavigationLeft />
      <NavigationRight />
      <Content />
    </React.Fragment>
  );
};

export default App;
