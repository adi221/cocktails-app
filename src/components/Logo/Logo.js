import React from 'react';
import './Logo.scss';

const Logo = ({ transformUp = false }) => {
  return (
    <div className={`logo ${transformUp ? 'logo__transform-up' : ''}`}>
      <span className='logo__span'>Make</span>
      <span className='logo__span'>Me a</span>
      <span className='logo__span'>Cocktail</span>
    </div>
  );
};

export default Logo;
