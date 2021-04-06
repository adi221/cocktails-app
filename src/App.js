import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SingleDrink, Drinks, Home, SingleIngredient } from './pages';
import { ScrollToTop, Footer, Navbar, Sidebar } from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/drinks'>
          <Drinks />
        </Route>
        <Route exact path='/drink/:id' children={<SingleDrink />} />
        <Route
          exact
          path='/ingredients/:name'
          children={<SingleIngredient />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
