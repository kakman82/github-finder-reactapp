import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_PAGELOADING,
  SET_BUTTONLOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  // production değilse yani dev ortamında github credentialı kullan ki çoklu api call da hata vermesin;
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  // production da global variable olarak kullan - herkes gibi;
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    pageLoading: false,
    buttonLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users;
  const searchUsers = async (text) => {
    setPageLoading();
    setButtonLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
    // Bu aşamada loadingleri false yapmamıza gerek yok bunu zaten reducerda SEARCH_USER ı switch case yapısında state deki user = action.payload olduktan sonra loadinglere false ataması yapıyorum
  };

  // Get Single User;
  const getUser = async (username) => {
    setPageLoading();
    setButtonLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get Single User Repos;
  const getUserRepos = async (username) => {
    setPageLoading();
    setButtonLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_pages=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading Page&Button;
  const setPageLoading = () => dispatch({ type: SET_PAGELOADING });
  const setButtonLoading = () => dispatch({ type: SET_BUTTONLOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        pageLoading: state.pageLoading,
        buttonLoading: state.buttonLoading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
