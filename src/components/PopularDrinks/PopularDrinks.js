import React from 'react';
import './PopularDrinks.scss';
import { Banner, SingleDrinkPreview } from '../../components';

const PopularDrinks = ({ drinks }) => {
  return (
    <div className='popular-drinks'>
      <Banner title='Popular Cocktails' />
      <div className='popular-drinks__container'>
        {drinks.map(drink => {
          return <SingleDrinkPreview key={drink.idDrink} drink={drink} />;
        })}
      </div>
    </div>
  );
};

export default PopularDrinks;
