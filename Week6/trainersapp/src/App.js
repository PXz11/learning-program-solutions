import React from 'react';
import TrainerDetail from './TrainerDetail';
import TrainersList from './TrainersList';
import trainersMock from './TrainersMock';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} />  
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;




