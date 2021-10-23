import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card mt-3'>
      <div className='card-content'>
        <h3>
          <a href={repo.html_url} className='has-text-danger-dark'>
            {repo.name}
          </a>
        </h3>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
