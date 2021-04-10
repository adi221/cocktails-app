import { GET_SINGLE_INGREDIENT, SHOW_MODAL } from '../actions/types';

const initialState = {
  single_ingredient: {},
  show_modal: false,
};

const single_ingredient_reducer = (state = initialState, action) => {
  if (action.type === GET_SINGLE_INGREDIENT) {
    return { ...state, single_ingredient: action.payload.ingredients[0] };
  }
  if (action.type === SHOW_MODAL) {
    return { ...state, show_modal: !state.show_modal };
  }
  return state;
};

export default single_ingredient_reducer;
