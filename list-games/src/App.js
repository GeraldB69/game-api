import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameList from "./components/GameList";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/game/screenshot/:id" component={GameList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
