import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, pageLoading, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (pageLoading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='button is-primary is-rounded'>
        Back to Search
      </Link>
      <span className='ml-3' style={{ lineHeight: 2.5 }}>
        Hireable:{' '}
      </span>
      {hireable ? (
        <i className='fas fa-check-circle has-text-success'></i>
      ) : (
        <i className='fas fa-times-circle has-text-danger'></i>
      )}

      <div className='card mt-6'>
        <div className='columns'>
          <div className='column is-6'>
            <div className='card-content has-text-centered'>
              <div className='media is-justify-content-center mb-1'>
                <figure className='image is-96x96'>
                  <img className='is-rounded' src={avatar_url} alt='' />
                </figure>
              </div>
              <p className='is-size-4 mt-0'>{name}</p>
              <p className='is-size-7'>Location: {location}</p>
            </div>
          </div>
          <div className='column is-6'>
            <div className='card-content has-text-centered-mobile'>
              {bio && (
                <Fragment>
                  <p className='subtitle mb-0'>Bio;</p>
                  <p className='mt-1'>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className='button my-2 is-primary is-small'>
                Visit Github Profile
              </a>

              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='card mt-5'>
        <div className='card-content'>
          <div className='field is-grouped is-grouped-multiline is-justify-content-center'>
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-dark'>Followers:</span>
                <span className='tag is-danger'>{followers}</span>
              </div>
            </div>
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-dark'>Following:</span>
                <span className='tag is-danger'>{following}</span>
              </div>
            </div>
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-dark'>Public Repos:</span>
                <span className='tag is-danger'>{public_repos}</span>
              </div>
            </div>
            <div className='control'>
              <div className='tags has-addons'>
                <span className='tag is-dark'>Public Gists:</span>
                <span className='tag is-danger'>{public_gists}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
