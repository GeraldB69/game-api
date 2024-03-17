import React from 'react';
import { Routes, Route } from "react-router-dom";

import GameList from "./components/GameList";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/game/fullscreen/:id" element={<GameList />} />
      </Routes>
    </div>
  );
}

export default App
