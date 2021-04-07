import React from 'react';
import './MenuHeader.scss';
import { connect } from 'react-redux';
import { HANDLE_MENU_QUERY } from '../../actions/types';

const MenuHeader = ({ query, handleQuery }) => {
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
        <select name='filter' id=''></select>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  query: state.drinks.query,
});

const mapDispatchToProps = dispatch => ({
  handleQuery: value => dispatch({ type: HANDLE_MENU_QUERY, payload: value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);
