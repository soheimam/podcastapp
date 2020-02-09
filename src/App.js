import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Timeline from './Components/Timeline/Timeline'
import Timeblock from './Components/Timeblock/Timeblock'
import Blockcreator from './Components/Blockcreator/Blockcreator'


function App() {
  return (
    <div className="App">
      <Timeline />
      <Timeblock />
      <Blockcreator />
    </div>
  );
}

export default App;
