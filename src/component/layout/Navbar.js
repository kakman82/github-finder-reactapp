import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }
  return (
    <nav
      className='navbar is-black'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <span className='icon-text is-size-4 has-text-weight-semibold'>
            <span className='icon'>
              <i className={icon}></i>
            </span>
            <span>{title}</span>
          </span>
        </Link>

        <Link
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          to='/'
          onClick={toggleBurgerMenu}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </Link>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/' onClick={toggleBurgerMenu}>
            Home
          </Link>

          <Link className='navbar-item' to='/about' onClick={toggleBurgerMenu}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
