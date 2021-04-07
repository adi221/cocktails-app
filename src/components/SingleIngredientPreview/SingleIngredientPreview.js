import React from 'react';
import './SingleIngredientPreview.scss';
import { Link } from 'react-router-dom';

const SingleIngredientPreview = ({ name, imgSrc }) => {
  return (
    <div className='single-ingredient-preview'>
      <Link to={`/ingredients/${name}`}>
        <img src={imgSrc} alt={name} />
      </Link>
      <p>{name}</p>
    </div>
  );
};

export default SingleIngredientPreview;
