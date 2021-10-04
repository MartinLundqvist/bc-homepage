import React, { useState } from 'react';
import Header from './components/Header';
import NavigationLeft from './components/NavigationLeft';

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <NavigationLeft />
    </React.Fragment>
  );
}

export default App;
