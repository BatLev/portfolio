import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1>Routertest</h1>
        <nav>
          <Link to="/main">Main</Link>?
          <Link to="/sub">Sub</Link>
        </nav>
    </div>
  );
}

export default App;
