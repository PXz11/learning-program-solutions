import React from 'react';
import TrainerDetails from './TrainerDetails';
import TrainersList from './TrainersList';
import trainersMock from './TrainersMock';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Trainers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />  
        </Routes>
    </BrowserRouter>
  );
}

export default App;




