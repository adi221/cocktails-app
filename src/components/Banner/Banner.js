import React from 'react';
import './Banner.scss';
import banner from '../../images/banner.png';

const Banner = ({ title }) => {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <img src={banner} alt='banner' />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Banner;
