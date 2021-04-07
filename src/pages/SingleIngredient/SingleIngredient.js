import React, { useEffect } from 'react';
import './SingleIngredient.scss';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleIngredient } from '../../actions/singleIngredientActions';
import { SingleIngredientHeader } from '../../components';

const SingleIngredient = props => {
  const { name } = useParams();

  useEffect(() => {
    props.getSingleIngredient(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
    );
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className='single-ingredient-page'>
      <SingleIngredientHeader ingredient={props.singleIngredient} />
    </div>
  );
};

const mapStateToProps = state => ({
  singleIngredient: state.singleIngredient.single_ingredient,
});

const mapDispatchToProps = dispatch => ({
  getSingleIngredient: url => dispatch(getSingleIngredient(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleIngredient);
