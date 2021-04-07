import React from 'react';
import './Menu.scss';
import { Banner, SingleDrinkPreview, MenuHeader } from '../../components';

const Menu = ({ title, menu }) => {
  console.log(menu);
  return (
    <div className='menu'>
      <Banner title={title} />
      <MenuHeader />
      <div className='menu__container'>
        {menu ? (
          menu.map(drink => {
            return <SingleDrinkPreview key={drink.idDrink} drink={drink} />;
          })
        ) : (
          <h3>
            No Search Results <br /> Please Try Another Search :)
          </h3>
        )}
      </div>
    </div>
  );
};

export default Menu;
