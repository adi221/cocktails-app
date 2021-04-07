import { GET_SINGLE_INGREDIENT } from '../actions/types';

const initialState = {
  single_ingredient: {},
};

const single_ingredient_reducer = (state = initialState, action) => {
  if (action.type === GET_SINGLE_INGREDIENT) {
    console.log(action.payload.ingredients[0]);
    return { ...state, single_ingredient: action.payload.ingredients[0] };
  }
  return state;
};

export default single_ingredient_reducer;
