import React, { useState } from 'react';
import Header from './components/Header';
import NavigationLeft from './components/NavigationLeft';
import NavigationRight from './components/NavigationRight';
import Content from './components/Content/Content';

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <NavigationLeft />
      <NavigationRight />
      <Content />
    </React.Fragment>
  );
}

export default App;
