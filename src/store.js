import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import homeReducer from './reducers/home_reducer';
import navReducer from './reducers/nav_reducer';

const rootReducer = combineReducers({ homeReducer, navReducer });

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, reduxDevtools);

const store = createStore(rootReducer, composedEnhancers);

export default store;
