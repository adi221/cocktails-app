import React from 'react';
import './SingleDrinkHeader.scss';

const SingleDrinkHeader = ({ drink }) => {
  const {
    strDrink: name,
    strInstructions: instructions,
    strDrinkThumb: image,
  } = drink;

  return (
    <div className='single-drink-header'>
      <img src={image} alt='single-drink' />
      <div className='single-drink-header__content'>
        <h1>{name}</h1>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default SingleDrinkHeader;
