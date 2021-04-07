import { GET_SINGLE_INGREDIENT } from './types';

const saveSingleIngredient = payload => ({
  type: GET_SINGLE_INGREDIENT,
  payload,
});

export const getSingleIngredient = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveSingleIngredient(data)))
      .catch(err => console.log(err));
  };
};
