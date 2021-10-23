import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login }, buttonLoading }) => {
  return (
    <div className='column is-4'>
      <div className='card mt-6 has-text-centered'>
        <div className='card-content'>
          <div className='media is-justify-content-center mb-0'>
            <figure className='image is-48x48'>
              <img className='is-rounded' src={avatar_url} alt='' />
            </figure>
          </div>
          <p className='is-size-4'>{login}</p>
          <div>
            <Link
              to={`/user/${login}`}
              className={`button is-small is-primary is-rounded my-1 ${
                buttonLoading && 'is-loading'
              }`}>
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
