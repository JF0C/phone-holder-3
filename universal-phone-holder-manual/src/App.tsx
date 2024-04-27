import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StlView } from './components/StlViewer/StlView';
import { StartMenu } from './components/StartMenu/StartMenu';

function App() {
  return (
    <div className="App">
      
      <h2>
        Universal Phone Holder
      </h2>
      <StlView source="/cad/AssemblyPhoneHolderBase.stl" height='80vh'/>
      <StartMenu height='15vh'></StartMenu>
    </div>
  );
}

export default App;
