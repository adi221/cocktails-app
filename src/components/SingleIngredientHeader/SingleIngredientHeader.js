import React from 'react';
import './SingleIngredientHeader.scss';

const SingleIngredientHeader = ({ ingredient }) => {
  let { strIngredient: name, strDescription: description } = ingredient;
  const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${name}.png`;
  if (description && description.length > 600) {
    description = description.substring(0, 600) + '...';
  }

  return (
    <div className='single-ingredient-header'>
      <img src={imgSrc} alt='single-ingredient' />
      <div className='single-ingredient-header__content'>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleIngredientHeader;
