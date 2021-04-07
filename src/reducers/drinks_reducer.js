import { GET_DRINKS, HANDLE_MENU_QUERY } from '../actions/types';

const initialState = {
  menu: [],
  query: '',
};

const drinks_reducer = (state = initialState, action) => {
  if (action.type === GET_DRINKS) {
    return { ...state, menu: action.payload.drinks };
  }
  if (action.type === HANDLE_MENU_QUERY) {
    return { ...state, query: action.payload };
  }
  return state;
};

export default drinks_reducer;
