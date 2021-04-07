import { GET_DRINKS } from './types';

const saveDrinks = payload => ({
  type: GET_DRINKS,
  payload,
});

export const getDrinks = url => {
  console.log(url);
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveDrinks(data)))
      .catch(err => console.log(err));
  };
};
