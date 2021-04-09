import React, { useEffect } from 'react';
import './Drinks.scss';
import { connect } from 'react-redux';
import { PageHeader, Menu, Loading } from '../../components';
// import { GET_DRINKS, HANDLE_MENU_QUERY } from '../../actions/types';
import { getDrinks } from '../../actions/drinksActions';

const Drinks = props => {
  useEffect(() => {
    props.getDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        props.query || 'a'
      }`
    );
    // eslint-disable-next-line
  }, [props.query]);

  if (!props.menu) {
    return <Loading />;
  }

  return (
    <div className='drinks-page'>
      <PageHeader title='Menu' />
      <Menu title='Cocktails Menu' />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getDrinks: url => dispatch(getDrinks(url)),
});

const mapStateToProps = state => ({
  query: state.drinks.query,
  menu: state.drinks.menu,
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
