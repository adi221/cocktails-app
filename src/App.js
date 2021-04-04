import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SingleDrink, Drinks, Home, Ingredients } from './pages';
import { ScrollToTop } from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/drinks'>
          <Drinks />
        </Route>
        <Route exact path='/drink/:id' children={<SingleDrink />} />
        <Route exact path='/ingredients/:name' children={<Ingredients />} />
      </Switch>
    </Router>
  );
}

export default App;
