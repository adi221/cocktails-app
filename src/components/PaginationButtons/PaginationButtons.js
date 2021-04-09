import React from 'react';
import './PaginationButtons.scss';
import { connect } from 'react-redux';
import { CHANGE_PAGE } from '../../actions/types';

const PaginationButtons = ({ paginatedMenu, currPage, changePage }) => {
  return (
    <div className='pagination'>
      <button
        className='pagination__btn'
        onClick={() => changePage('prev')}
        disabled={currPage === 0}
      >
        Previous Page
      </button>
      <p>
        Page {currPage + 1} of {paginatedMenu.length}
      </p>
      <button
        className='pagination__btn'
        onClick={() => changePage('next')}
        disabled={currPage === paginatedMenu.length - 1}
      >
        Next Page
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  currPage: state.drinks.page,
  paginatedMenu: state.drinks.paginated_menu,
});

const mapDispatchToProps = dispatch => ({
  changePage: actionType =>
    dispatch({ type: CHANGE_PAGE, payload: actionType }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButtons);
