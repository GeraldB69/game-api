import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameList from "./components/GameList";
import './App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameList />}></Route>
          <Route path="/game/fullscreen/:id" element={<GameList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
