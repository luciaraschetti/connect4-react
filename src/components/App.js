import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import SavedGames from './screens/SavedGames';
import Game from './screens/Game';
import Players from './screens/Players';
import Contact from './screens/Contact';

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
