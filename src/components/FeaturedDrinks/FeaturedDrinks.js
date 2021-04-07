import React from 'react';
import './FeaturedDrinks.scss';
import { Banner, SingleFeaturedDrink } from '../../components';

const FeaturedDrinks = ({ drinks, title }) => {
  return (
    <div className='featured-drinks'>
      <Banner title={title} />
      <div className='featured-drinks__container'>
        {drinks.map(drink => {
          return <SingleFeaturedDrink key={drink.idDrink} drink={drink} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedDrinks;
