import React from 'react';
import './Sidebar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SHOW_SIDEBAR } from '../../actions/types';

const Sidebar = ({ isShowSidebar, hideSidebar }) => {
  if (!isShowSidebar) return null;

  return (
    <div className='sidebar'>
      <Link to='/' onClick={hideSidebar}>
        Home
      </Link>
      <Link to='/drinks' onClick={hideSidebar}>
        Drinks
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  isShowSidebar: state.nav.show_sidebar,
});

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => dispatch({ type: SHOW_SIDEBAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
