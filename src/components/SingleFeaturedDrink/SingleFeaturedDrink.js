import React from 'react';
import './SingleFeaturedDrink.scss';
import { Link } from 'react-router-dom';

const SingleFeaturedDrink = ({ drink }) => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: instructions,
  } = drink;

  return (
    <div className='single-featured'>
      <img src={image} alt='featured-drink' />
      <h1 className='single-featured__title'>{name}</h1>
      <p className='single-featured__instructions'>
        {instructions.length > 45
          ? instructions.substring(0, 45) + '...'
          : instructions}
      </p>
      <Link to={`/drink/${id}`}>View More</Link>
    </div>
  );
};

export default SingleFeaturedDrink;
