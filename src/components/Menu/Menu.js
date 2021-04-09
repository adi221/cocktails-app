import React from 'react';
import './Menu.scss';
import { connect } from 'react-redux';
import {
  Banner,
  SingleDrinkPreview,
  MenuHeader,
  PaginationButtons,
} from '../../components';

const Menu = ({ title, paginatedMenu, currentPage, regularMenu }) => {
  // Checking if paginatedMenu is array of arrays ( more than one page) or one page
  const menu = Array.isArray(paginatedMenu[currentPage])
    ? paginatedMenu[currentPage]
    : regularMenu;

  return (
    <div className='menu'>
      <Banner title={title} />
      <MenuHeader />
      <div className='menu__container'>
        {menu.length !== 0 ? (
          menu.map(drink => {
            return <SingleDrinkPreview key={drink.idDrink} drink={drink} />;
          })
        ) : (
          <h3>
            No Results Found <br /> Please Try Another Search
          </h3>
        )}
      </div>
      {paginatedMenu && Array.isArray(paginatedMenu[currentPage]) && (
        <PaginationButtons />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  paginatedMenu: state.drinks.paginated_menu,
  regularMenu: state.drinks.menu,
  currentPage: state.drinks.page,
});

export default connect(mapStateToProps)(Menu);
