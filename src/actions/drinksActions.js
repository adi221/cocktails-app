import { GET_DRINKS, GET_FILTER_OPTIONS } from './types';

const saveDrinks = payload => ({
  type: GET_DRINKS,
  payload,
});

const saveFilterOptions = payload => ({
  type: GET_FILTER_OPTIONS,
  payload,
});

export const getDrinks = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveDrinks(data)))
      .catch(err => console.log(err));
  };
};

export const getFilterOptions = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveFilterOptions(data)))
      .catch(err => console.log(err));
  };
};
