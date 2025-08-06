import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Hello, incrementing the value.");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log("Decrementing the value.");
  };

  return (
    <div className="counter-container">
      <div className="count-display">{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function WelcomeMessage() {
  const msg = (text) => {
    console.log(text);
    alert(text);
  };

  return (
    <div>
      <button className="welcome-button" onClick={() => msg("Welcome")}>Say Welcome</button>
    </div>
  );
}

function EventButton() {
  const handleClick = () => {
    console.log("I was clicked");
    alert("I was clicked!"); 
  };

  return (
    <div>
      <button className="event-button" onClick={handleClick}>OnPress</button>
    </div>
  );
}

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = () => {
    const convertedAmount = rupees * 0.011; 
    setEuros(convertedAmount);
  };
return (
  <div>
    <input
      type="number"
      value={rupees}
      onChange={(e) => setRupees(e.target.value)}
      placeholder="Enter Rupees"
    />
    <button onClick={handleSubmit}>Convert</button>
    {euros !== null && <p>Euros: {euros}</p>}
  </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Counter />
      <WelcomeMessage />
      <EventButton />
      <h1 className="title">Currency Convertor</h1>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
