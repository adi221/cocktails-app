import React, { useEffect } from 'react';
import './SingleDrink.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getSingleDrink,
  getRandomDrinks,
} from '../../actions/singleDrinkActions';
import {
  SingleDrinkHeader,
  Ingredients,
  FeaturedDrinks,
  Loading,
} from '../../components';

const SingleDrink = props => {
  const { id } = useParams();

  useEffect(() => {
    props.getData(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    props.getRandomDrinks(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    // eslint-disable-next-line
  }, [id]);

  const ingredients = [];
  for (let key in props.singleDrink) {
    if (props.singleDrink[key] !== null && key.includes('strIngredient')) {
      ingredients.push({
        name: props.singleDrink[key],
        id: ingredients.length,
        src: `https://www.thecocktaildb.com/images/ingredients/${props.singleDrink[key]}.png`,
      });
    }
  }

  if (Object.keys(props.singleDrink).length === 0) {
    return <Loading />;
  }

  return (
    <div className='single-drink-page'>
      <SingleDrinkHeader drink={props.singleDrink} />
      <Ingredients ingredients={ingredients} title='Ingredients' />
      <FeaturedDrinks drinks={props.randomDrinks} title='You Might Also Like' />
    </div>
  );
};

const mapStateToProps = state => ({
  singleDrink: state.singleDrink.single_drink,
  randomDrinks: state.singleDrink.random_drinks,
});

const mapDispatchToProps = dispatch => ({
  getData: url => dispatch(getSingleDrink(url)),
  getRandomDrinks: url => dispatch(getRandomDrinks(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleDrink);
