import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Logo } from '../../components';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <ul className='footer__container-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/drinks'>Drinks</Link>
          </li>
        </ul>
        <div className='footer__container-center'>
          <ul className='footer__container-social'>
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
          <p className='footer__container-copyright'>
            &copy;{new Date().getFullYear()} by{' '}
            <a
              href='https://adi-mizrahi.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Adi Mizrahi
            </a>
          </p>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
