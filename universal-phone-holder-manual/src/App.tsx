import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StlView } from './components/StlViewer/StlView';
import { StartMenu } from './components/StartMenu/StartMenu';

function App() {
  return (
    <div className="App">
      
      <h2>
        Universal Phone Holder Manual
      </h2>
      <StlView source="/cad/AssemblyPhoneHolderBase.stl" height='80vh'/>
      <StartMenu height='20vh'></StartMenu>
    </div>
  );
}

export default App;
