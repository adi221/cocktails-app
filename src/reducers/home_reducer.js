import { GET_COCKTAILS_HOME } from '../actions/types';

const initialState = {
  popular_drinks: [],
  featured_drinks: [],
};

const home_reducer = (state = initialState, action) => {
  if (action.type === GET_COCKTAILS_HOME) {
    const { feturedDrinks, popularDrinks } = action.payload;
    return {
      ...initialState,
      popular_drinks: popularDrinks,
      featured_drinks: feturedDrinks,
    };
  }
  return state;
};

export default home_reducer;
