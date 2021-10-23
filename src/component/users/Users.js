import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, pageLoading, buttonLoading } = githubContext;

  if (pageLoading) {
    return <Spinner />;
  } else {
    return (
      <div className='columns is-multiline'>
        {users.map((el) => (
          <UserItem key={el.id} user={el} buttonLoading={buttonLoading} />
        ))}
      </div>
    );
  }
};

export default Users;
