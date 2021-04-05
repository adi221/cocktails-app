import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDrinkPreview.scss';

const SingleDrinkPreview = ({ drink }) => {
  const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
  return (
    <div className='single-drink'>
      <Link to={`/drink/${id}`}>
        <img src={image} alt='single-drink' />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default SingleDrinkPreview;
