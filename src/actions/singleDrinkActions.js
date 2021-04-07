import { GET_SINGLE_DRINK, GET_RANDOM_DRINKS } from './types';
import { getJSON } from '../utils/helpers';

const saveSingleDrink = payload => ({
  type: GET_SINGLE_DRINK,
  payload,
});

const saveRandomDrinks = payload => ({
  type: GET_RANDOM_DRINKS,
  payload,
});

export const getSingleDrink = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveSingleDrink(data)))
      .catch(err => console.log(err));
  };
};

export const getRandomDrinks = url => {
  return dispatch => {
    try {
      const data = Promise.all([getJSON(url), getJSON(url), getJSON(url)]);
      data.then(values => dispatch(saveRandomDrinks(values)));
    } catch (err) {
      console.log(err);
    }
  };
};
