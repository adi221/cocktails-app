import React from 'react';
import './HomeHeader.scss';
import heroImg from '../../images/logo_cocktail.png';

const HomeHeader = () => {
  return (
    <div className='home-header'>
      <div className='home-header__circle'>
        <h1 className='home-header__circle-title'>Cocktails</h1>
        <img src={heroImg} alt='cocktail-hero' />
      </div>
    </div>
  );
};

export default HomeHeader;
