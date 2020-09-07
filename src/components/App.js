import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';
import Game from './pages/Game';
import SavedGames from './pages/SavedGames';
import Contact from './pages/Contact';
import './reset.css';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/players" component={Players} />
      <Route path="/game" component={Game} />
      <Route path="/savedgames" component={SavedGames} />
      <Route path="/contact" component={Contact} />
      <Route component={() => (
        <h1>Error 404</h1>
      )} />
    </Switch>
  </Router>
)

export default App;
