import React from 'react';
import './Ingredients.scss';
import { Banner, SingleIngredientPreview } from '../../components';

const Ingredients = ({ ingredients, title }) => {
  return (
    <div className='ingredients'>
      <Banner title={title} />
      <div className='ingredients__container'>
        {ingredients.map(ingredient => {
          return (
            <SingleIngredientPreview
              key={ingredient.id}
              name={ingredient.name}
              imgSrc={ingredient.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
