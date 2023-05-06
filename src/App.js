import React from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import LanguageKnown from './components/LanguageKnown/LanguageKnown'

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <About></About>
      <LanguageKnown></LanguageKnown>
    </div>
  );
}

export default App;
