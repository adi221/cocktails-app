import React from 'react';
import './HomeHeader.scss';
import { Link } from 'react-router-dom';
import heroImg from '../../images/logo_cocktail.png';

const HomeHeader = () => {
  return (
    <div className='home-header'>
      {/* Hero Image */}
      <div className='home-header__circle'>
        <h1 className='home-header__circle-title'>Cocktails</h1>
        <img src={heroImg} alt='cocktail-hero' />
      </div>
      {/* Liqours */}
      <div className='home-header__liqours-container'>
        <Link to='/'>
          <img
            src='https://www.thecocktaildb.com/images/ingredients/vodka.png'
            alt='vodka'
          />
          <p>Vodka</p>
        </Link>
        <Link to='/'>
          <img
            src='https://www.thecocktaildb.com/images/ingredients/gin.png'
            alt='gin'
          />
          <p>Gin</p>
        </Link>
        <Link to='/'>
          <img
            src='https://www.thecocktaildb.com/images/ingredients/rum.png'
            alt='rum'
          />
          <p>Rum</p>
        </Link>
        <Link to='/'>
          <img
            src='https://www.thecocktaildb.com/images/ingredients/tequila.png'
            alt='tequila'
          />
          <p>Tequila</p>
        </Link>
        <Link to='/'>
          <img
            src='https://www.thecocktaildb.com/images/ingredients/whiskey.png'
            alt='whiskey'
          />
          <p>Whiskey</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
