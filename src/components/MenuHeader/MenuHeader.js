import React, { useEffect } from 'react';
import './MenuHeader.scss';
import { connect } from 'react-redux';
import {
  HANDLE_MENU_QUERY,
  HANDLE_MENU_FILTER,
  HANDLE_FILTER_OPTIONS,
  UPDATE_MENU,
} from '../../actions/types';
import { getFilterOptions } from '../../actions/drinksActions';

const MenuHeader = ({
  query,
  handleQuery,
  filterValue,
  handleFilter,
  getOptions,
  filterOptions,
  handleFilterOptions,
  filterOptionsValue,
  updateMenu,
}) => {
  // For fetch requests
  const urlOption =
    filterValue === 'None' ? null : filterValue.charAt(0).toLowerCase();

  useEffect(() => {
    if (!urlOption) return;
    getOptions(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${urlOption}=list`
    );
    // eslint-disable-next-line
  }, [urlOption]);

  useEffect(() => {
    if (filterValue === 'None') {
      updateMenu(filterValue, null);
    }
    updateMenu(filterValue, filterOptionsValue);
  }, [filterOptionsValue, filterValue]);

  return (
    <div className='menu-header'>
      <form
        className='menu-header__form-search'
        onSubmit={e => e.preventDefault()}
      >
        <input
          type='text'
          value={query}
          onChange={e => handleQuery(e.target.value)}
          placeholder='Search by Name'
        />
        <button>Search</button>
      </form>
      <form className='menu-header__form-filter'>
        <h3>Filter by</h3>
        <select
          name='filter'
          value={filterValue}
          onChange={e => handleFilter(e.target.value)}
        >
          <option value='None'>None</option>
          <option value='Alcoholic'>Alcoholic</option>
          <option value='Ingredient'>Ingredient</option>
          <option value='Category'>Category</option>
        </select>
        {filterValue !== 'None' && (
          <select
            name='filter'
            value={filterOptionsValue}
            onChange={e => handleFilterOptions(e.target.value)}
          >
            {filterOptions.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  query: state.drinks.query,
  filterValue: state.drinks.filter,
  filterOptions: state.drinks.filter_options,
  filterOptionsValue: state.drinks.filter_options_value,
});

const mapDispatchToProps = dispatch => ({
  handleQuery: value => dispatch({ type: HANDLE_MENU_QUERY, payload: value }),
  handleFilter: value => dispatch({ type: HANDLE_MENU_FILTER, payload: value }),
  getOptions: url => dispatch(getFilterOptions(url)),
  handleFilterOptions: value =>
    dispatch({ type: HANDLE_FILTER_OPTIONS, payload: value }),
  updateMenu: (optionType, value) =>
    dispatch({ type: UPDATE_MENU, payload: { optionType, value } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);
