import { GET_COCKTAILS_HOME } from './types';

const saveCocktailsHome = payload => ({
  type: GET_COCKTAILS_HOME,
  payload,
});

export const getCocktailsHome = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveCocktailsHome(data)))
      .catch(err => console.log(err));
  };
};
