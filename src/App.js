import React from 'react';
import { Greeting } from './features/greetings.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
    </div>
  );
}

export default App;
