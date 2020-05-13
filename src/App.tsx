import React from 'react';

import GlobalStyle from './styles';
import Routes from './Routes';


const App = () => {
  return (
    <>
      <header><span>fybooks</span></header>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
