import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './reducers/home_reducer';

// const initialStore = {
//   popular_drinks: [],
//   featured_drinks: [],
// };

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, reduxDevtools);

const store = createStore(homeReducer, composedEnhancers);

export default store;
