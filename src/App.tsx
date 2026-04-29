import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CommanderCharlesPlace from './pages/CommanderCharlesPlace';
import PenrosePoint from './pages/PenrosePoint';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commander-charles-place" element={<CommanderCharlesPlace />} />
        <Route path="/penrose-point" element={<PenrosePoint />} />
      </Routes>
    </BrowserRouter>
  );
}
