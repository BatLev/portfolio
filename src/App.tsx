import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='content'>
        <div className='about'>
          <h1>Welcome!</h1>
          <p>
            I am Levente Batóg and this is my personal page. Currently there isn't much to see but feel free to look around.
          </p>
        </div>
        <img src='https://rune.ai/images/RuneLogoPurpleHD.png' />
        <img style={{ top: '40rem', right: 'auto', left: '-25rem' }} src='https://rune.ai/images/RuneLogoPurpleHD.png' />
      </main>
    </div>
  );
}

export default App;
