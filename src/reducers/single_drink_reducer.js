import { GET_SINGLE_DRINK, GET_RANDOM_DRINKS } from '../actions/types';

const initialState = {
  single_drink: {},
  random_drinks: [],
};

const single_drink_reducer = (state = initialState, action) => {
  if (action.type === GET_SINGLE_DRINK) {
    let data = action.payload.drinks[0];
    return { ...state, single_drink: data };
  }
  if (action.type === GET_RANDOM_DRINKS) {
    console.log(action.payload);
    console.log('Works');
    return { ...state, random_drinks: action.payload };
  }
  return state;
};

export default single_drink_reducer;
