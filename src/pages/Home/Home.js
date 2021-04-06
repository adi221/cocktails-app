import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import { getCocktailsHome } from '../../actions/homeActions';
import { HomeHeader, PopularDrinks, FeaturedDrinks } from '../../components';

const Home = props => {
  useEffect(() => {
    props.getData('https://find-your-cocktails.herokuapp.com/home');
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-page'>
      <HomeHeader />
      <PopularDrinks drinks={props.popularDrinks} />
      <FeaturedDrinks drinks={props.featuredDrinks} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getData: url => dispatch(getCocktailsHome(url)),
});

const mapStateToProps = state => ({
  popularDrinks: state.popular_drinks,
  featuredDrinks: state.featured_drinks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
