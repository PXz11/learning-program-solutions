import { CalculatorScore } from './components/CalculatorScore';
import './App.css';
import React from 'react';

function App() {
  return (
  <div>
  <CalculatorScore Name={"Steeve"}
    School={"DNV Public School"}
    total={284}
    goal={300} 
    />
    </div>
  );
}

export default App;
