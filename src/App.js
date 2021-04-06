import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SingleDrink, Drinks, Home, Ingredients } from './pages';
import { ScrollToTop, Footer, Navbar } from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
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
      <Footer />
    </Router>
  );
}

export default App;
