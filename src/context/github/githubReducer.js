import {
  SEARCH_USERS,
  SET_PAGELOADING,
  SET_BUTTONLOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

/* eslint import/no-anonymous-default-export: */
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        pageLoading: false,
        buttonLoading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        pageLoading: false,
        buttonLoading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        pageLoading: false,
        buttonLoading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        pageLoading: false,
        buttonLoading: false,
      };
    case SET_PAGELOADING:
      return {
        ...state,
        pageLoading: true,
      };
    case SET_BUTTONLOADING:
      return {
        ...state,
        buttonLoading: true,
      };
    default:
      return state;
  }
};
