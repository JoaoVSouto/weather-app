import React from 'react';

import Header from '../components/Header';
import InfoBox from '../components/InfoBox';
import SearchBox from '../components/SearchBox';
import Cities from '../components/Cities';

function App() {
  return (
    <div className="app">
      <Header />
      <InfoBox />
      <SearchBox />
      <Cities />
    </div>
  );
}

export default App;
