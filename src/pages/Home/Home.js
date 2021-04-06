import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { getCocktailsHome } from '../../actions/homeActions';
import {
  HomeHeader,
  PopularDrinks,
  FeaturedDrinks,
  Loading,
  Ingredients,
} from '../../components';
import { liqours } from '../../data/data';

const Home = props => {
  useEffect(() => {
    props.getData('https://find-your-cocktails.herokuapp.com/home');
    // eslint-disable-next-line
  }, []);

  if (props.popularDrinks.length === 0 || props.featuredDrinks.length === 0) {
    return <Loading />;
  }

  return (
    <div className='home-page'>
      <HomeHeader />
      <Ingredients ingredients={liqours} title='Popular Liqours' />
      <PopularDrinks drinks={props.popularDrinks} />
      <FeaturedDrinks drinks={props.featuredDrinks} title='Featured Drinks' />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getData: url => dispatch(getCocktailsHome(url)),
});

const mapStateToProps = state => ({
  popularDrinks: state.home.popular_drinks,
  featuredDrinks: state.home.featured_drinks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
