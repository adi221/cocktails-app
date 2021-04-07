import { SHOW_SIDEBAR } from '../actions/types';

const initialState = {
  show_sidebar: false,
};

const nav_reducer = (state = initialState, action) => {
  if (action.type === SHOW_SIDEBAR) {
    return { ...state, show_sidebar: !state.show_sidebar };
  }
  return state;
};

export default nav_reducer;
