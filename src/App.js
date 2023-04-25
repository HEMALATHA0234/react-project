import React from 'react';
import Quotes from './components/Quotes';
import colors from './components/colors';
import './App.css';

function App() {
  return (
    <div className="App">
      <Quotes />
      <colors></colors>
    </div>
  );
}

export default App;
