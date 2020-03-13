import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataGrid } from './DataGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DataGrid/>
      </header>
    </div>
  );
}

export default App;
