import {
  GET_DRINKS,
  HANDLE_MENU_QUERY,
  HANDLE_MENU_FILTER,
  GET_FILTER_OPTIONS,
  HANDLE_FILTER_OPTIONS,
  UPDATE_MENU,
} from '../actions/types';

const initialState = {
  original_menu: [],
  menu: [],
  query: '',
  filter: 'None',
  filter_options: [],
  filter_options_value: '',
};

const drinks_reducer = (state = initialState, action) => {
  if (action.type === GET_DRINKS) {
    return {
      ...state,
      menu: action.payload.drinks,
      original_menu: action.payload.drinks,
    };
  }
  if (action.type === HANDLE_MENU_QUERY) {
    return { ...state, query: action.payload };
  }
  if (action.type === HANDLE_MENU_FILTER) {
    return { ...state, filter: action.payload };
  }
  if (action.type === GET_FILTER_OPTIONS) {
    const options = action.payload.drinks;
    const modifiedOptions = options.map(option => {
      for (let key in option) {
        return option[key];
      }
      // Default case
      return option;
    });
    return {
      ...state,
      filter_options: modifiedOptions,
      filter_options_value: modifiedOptions[0],
    };
  }
  if (action.type === HANDLE_FILTER_OPTIONS) {
    return { ...state, filter_options_value: action.payload };
  }
  if (action.type === UPDATE_MENU) {
    let newMenu = [...state.original_menu];
    let { optionType, value } = action.payload;
    if (optionType === 'None') {
      return { ...state, menu: newMenu };
    }
    optionType = 'str' + optionType;
    // for ingredients: strIngredient1, strIngredient2, 3, 4, ... , 15 (or null)
    const ingredientFilter = drink => {
      for (let i = 1; i <= 15; i++) {
        optionType = 'strIngredient';
        optionType = optionType + i;
        console.log(optionType);
        // Early exit if null
        if (drink[optionType] === null) break;
        return drink[optionType] === value;
      }
    };
    if (optionType === 'strIngredient') {
      newMenu = newMenu.filter(drink => ingredientFilter(drink));
    } else {
      newMenu = newMenu.filter(drink => drink[optionType] === value);
    }
    return { ...state, menu: newMenu };
  }
  return state;
};

export default drinks_reducer;
