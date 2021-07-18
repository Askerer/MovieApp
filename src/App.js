import React from 'react';
//components
import Header from './components/Header';
import Home from './components/Home';

//Styles
import {GlobalStype} from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStype />
    </div>
  );
}

export default App;
