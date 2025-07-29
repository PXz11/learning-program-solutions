import logo from './logo.svg';
import './App.css';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import React from 'react';

function App() {
  return (
    <div className="Container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
