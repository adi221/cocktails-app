import React from 'react';
import './PageHeader.scss';
import heroImg from '../../images/logo_cocktail.png';

const PageHeader = ({ title }) => {
  return (
    <div className='page-header'>
      <div className='page-header__circle'>
        <h1 className='page-header__circle-title'>{title}</h1>
        <img src={heroImg} alt='cocktail-hero' />
      </div>
    </div>
  );
};

export default PageHeader;
