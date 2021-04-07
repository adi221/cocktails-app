import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Logo } from '../../components';
import { connect } from 'react-redux';
import { SHOW_SIDEBAR } from '../../actions/types';

const Navbar = ({ toggleSidebar, isShowSidebar }) => {
  return (
    <nav className='nav'>
      <div className='nav-top'>
        <ul className='nav-top__social'>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
      <div className='nav-bottom'>
        <div className='nav-bottom__center'>
          <Logo transformUp />
          <button className='nav-bottom__center-toggle' onClick={toggleSidebar}>
            <div className={`line ${isShowSidebar && 'line__one'}`} />
            <div className={`line ${isShowSidebar && 'line__two'}`} />
            <div className={`line  ${isShowSidebar && 'line__three'}`} />
          </button>
          <ul className='nav-bottom__center-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/drinks'>Drinks</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch({ type: SHOW_SIDEBAR }),
});

const mapStateToProps = state => ({
  isShowSidebar: state.nav.show_sidebar,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
