import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert message;
  const setAlert = (message, colorClass) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, colorClass },
    });

    // alert mesajı için kapat click yerine bu şekilde olması kullanıcı açısından daha iyi butona basmak zorunda kalmaz
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
