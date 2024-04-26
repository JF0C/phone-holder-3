import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StlView } from './components/StlViewer/StlView';

function App() {
  return (
    <div className="App">
      <h2>
        Universal Phone Holder Manual
      </h2>
      <StlView source="/cad/AssemblyHandlebarMountUnattached.stl"/>
    </div>
  );
}

export default App;
