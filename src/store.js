import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import homeReducer from './reducers/home_reducer';
import navReducer from './reducers/nav_reducer';
import singleDrinkReducer from './reducers/single_drink_reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  nav: navReducer,
  singleDrink: singleDrinkReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, reduxDevtools);

const store = createStore(rootReducer, composedEnhancers);

export default store;
