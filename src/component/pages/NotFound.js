import React from 'react';
import { Link } from 'react-router-dom';
import error404image from './error404picture.jpg';

const NotFound = () => {
  return (
    <section className='section is-medium'>
      <div className='container'>
        <div className='columns is-vcentered'>
          <div className='column has-text-centered'>
            <h1 className='title'>404 Page Not Found</h1>
            <p className='subtitle'>
              The page you are looking for does not exist.
            </p>
            <Link className='button is-primary is-rounded' to='/'>
              Home
            </Link>
          </div>
          <div className='column has-text-centered'>
            <img src={error404image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
